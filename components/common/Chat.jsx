"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaExpand, FaCompress, FaPaperclip, FaLink } from "react-icons/fa";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const messageEndRef = useRef(null);
    const inputRef = useRef(null);

    // Load cached messages safely
    useEffect(() => {
        try {
            const savedMessages = localStorage.getItem("chatMessages");
            if (savedMessages) {
                const parsedMessages = JSON.parse(savedMessages);
                if (Array.isArray(parsedMessages)) {
                    setMessages(parsedMessages);
                }
            }
        } catch (error) {
            console.error("Error loading chat messages:", error);
            localStorage.removeItem("chatMessages");
        }
    }, []);

    // Save messages safely
    useEffect(() => {
        try {
            localStorage.setItem("chatMessages", JSON.stringify(messages));
        } catch (error) {
            console.error("Error saving chat messages:", error);
        }
    }, [messages]);

    // Scroll to bottom when chat opens or new messages arrive
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => {
            messageEndRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [isOpen, messages]);

    // Auto-focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { role: "user", content: userInput.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setUserInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMessage.content,
                    conversationHistory: messages.map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data.answer) {
                throw new Error("No answer in response");
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.answer,
                    sources: data.sources || []
                }
            ]);

        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I couldn't process your request. Could you try rephrasing your question?",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setIsExpanded(false); // Reset expansion when closing
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !loading && userInput.trim()) {
            sendMessage();
        }
    };

    const renderMessageContent = (content) => {
        return (
            <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ node, ...props }) => (
                        <a {...props} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul {...props} className="list-disc pl-5 my-2" />
                    ),
                    ol: ({ node, ...props }) => (
                        <ol {...props} className="list-decimal pl-5 my-2" />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong {...props} className="font-bold" />
                    ),
                    em: ({ node, ...props }) => (
                        <em {...props} className="italic" />
                    ),
                    p: ({ node, ...props }) => (
                        <p {...props} className="my-2" />
                    ),
                }}
            >
                {content}
            </Markdown>
        );
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat toggle button */}
            {!isOpen && (
                <button
                    className="bg-blue-500 text-white rounded-full p-3 cursor-pointer hover:bg-blue-600 transition-all focus:outline-none shadow-lg"
                    onClick={toggleChat}
                    aria-label="Open chat"
                >
                    <FaComments size={30} />
                </button>
            )}

            {/* Chat window */}
            {isOpen && (
                <div
                    className={`${isExpanded ? "w-[330px] md:w-[600px] h-[350px] md:h-[700px]" : "w-[300px] h-[320px] md:w-96 md:h-[500px]"} bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col transition-all duration-300`}
                >
                    {/* Chat header */}
                    <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h4 className="font-semibold">EmbeddedExpert AI Assistant</h4>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleExpand}
                                className="hover:bg-blue-600 p-1 rounded-full transition-all focus:outline-none"
                                aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
                                title={isExpanded ? "Collapse" : "Expand"}
                            >
                                {isExpanded ? <FaCompress size={16} /> : <FaExpand size={16} />}
                            </button>
                            <button
                                onClick={toggleChat}
                                className="hover:bg-blue-600 p-1 rounded-full transition-all focus:outline-none"
                                aria-label="Close chat"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Chat messages - container with forced bottom alignment */}
                    <div className="flex-1 p-3 overflow-y-auto flex flex-col">
                        <div className="mt-auto">
                            {messages.length === 0 ? (
                                <div className="text-center text-gray-500 py-4">
                                    <p>Welcome to EmbeddedExpert AI Assistant!</p>
                                    <p className="mt-2">Ask me about our courses, instructors, or resources.</p>
                                </div>
                            ) : (
                                messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}
                                    >
                                        <div
                                            className={`inline-block max-w-[80%] p-3 rounded-lg break-words ${msg.role === "user"
                                                ? "bg-blue-500 text-white rounded-br-none"
                                                : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                }`}
                                        >
                                            {renderMessageContent(msg.content)}

                                            {/* Show sources for assistant messages */}
                                            {msg.role === "assistant" && msg.sources?.length > 0 && (
                                                <div className="mt-2 pt-2 border-t border-gray-200">
                                                    <p className="text-xs text-gray-500 mb-1">Sources:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {msg.sources.map((source, i) => (
                                                            <a
                                                                key={i}
                                                                href={source.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded flex items-center"
                                                            >
                                                                {source.image && <FaPaperclip className="mr-1" />}
                                                                {source.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messageEndRef} />
                        </div>
                    </div>

                    {/* Chat input */}
                    <div className="flex p-3 border-t border-gray-300">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask about our courses or resources..."
                            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:border-blue-500"
                            value={userInput}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            aria-label="Chat input"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !userInput.trim()}
                            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none flex items-center justify-center min-w-[80px]"
                            aria-label="Send message"
                        >
                            {loading ? (
                                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;