"use client";

import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {
                !isOpen && (
                    <div className={`bg-blue-500 text-white rounded-full p-3 cursor-pointer ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                        <FaComments size={30} />
                    </div>
                )

            }

            {isOpen && (
                <div className="w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
                    <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h4>Chat with AI</h4>
                        <button onClick={toggleChat}>X</button>
                    </div>
                    <div className="flex-1 p-3 overflow-y-auto">
                        {/* Chat messages will go here */}
                    </div>
                    <div className="flex p-3 border-t border-gray-300">
                        <input type="text" placeholder="Type a message..." className="flex-1 p-2 border border-gray-300 rounded mr-2" />
                        <button className="bg-blue-500 text-white p-2 rounded">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
