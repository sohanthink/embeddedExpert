"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";



const Chat = () => {
    const [isOpen, setIsOpen] = useState(false); // Toggle chat window
    const [messages, setMessages] = useState([]); // Store chat messages
    const [userInput, setUserInput] = useState(""); // Store user input
    const [loading, setLoading] = useState(false); // Track loading state
    const messageEndRef = useRef(null); // Ref for auto-scrolling

    // Load cached messages from local storage on component mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("chatMessages");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Save messages to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
    }, [messages]);

    // Auto-scroll to the latest message
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle input change
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    // Send message to the API
    const sendMessage = async () => {
        if (!userInput.trim()) return; // Ignore empty messages

        const userMessage = { role: "user", content: userInput };
        setMessages((prev) => [...prev, userMessage]); // Add user message to the chat
        setUserInput(""); // Clear input field
        setLoading(true); // Set loading state

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) throw new Error("Failed to fetch response");

            const { reply } = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: reply }]); // Add assistant's reply
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "An error occurred. Please try again." },
            ]);
        } finally {
            setLoading(false); // Reset loading state
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the latest message
        }
    };

    // Toggle chat window
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat toggle button */}
            {!isOpen && (
                <div
                    className="bg-blue-500 text-white rounded-full p-3 cursor-pointer hover:bg-blue-600 transition-all"
                    onClick={toggleChat}
                >
                    <FaComments size={30} />
                </div>
            )}

            {/* Chat window */}
            {isOpen && (
                <div className="w-96 h-[500px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
                    {/* Chat header */}
                    <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h4 className="font-semibold">Chat with AI</h4>
                        <button
                            onClick={toggleChat}
                            className="hover:bg-blue-600 p-1 rounded-full transition-all"
                        >
                            <FaTimes size={18} />
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 p-3 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"
                                    }`}
                            >
                                <div
                                    className={`inline-block max-w-[80%] p-3 rounded-lg ${msg.role === "user"
                                        ? "bg-blue-500 text-white rounded-br-none"
                                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                                        }`}
                                >
                                    {msg.role === "assistant"
                                        ? msg.content.split("\n").map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))
                                        : msg.content}
                                </div>
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </div>

                    {/* Chat input */}
                    <div className="flex p-3 border-t border-gray-300">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:border-blue-500"
                            value={userInput}
                            onChange={handleInputChange}
                            disabled={loading}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !loading && userInput.trim()) {
                                    sendMessage();
                                }
                            }}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !userInput.trim()}
                            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;