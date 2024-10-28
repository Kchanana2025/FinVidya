// src/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import ReactMarkdown from 'react-markdown';

const YojnaBuddy = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const messagesEndRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setUsername(user.fullName || user.username || user.firstName);
    }
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: username, isUser: true };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5001/output', { prompt: input });
      const botMessage = { text: response.data.output, sender: 'bot', isUser: false };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = { text: 'Error fetching response. Please try again.', sender: 'bot', isUser: false };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`transition-transform transform ${isOpen ? 'scale-100' : 'scale-0'} origin-bottom-right`}
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <div className="flex flex-col h-full w-96 bg-gray-100 p-4 shadow-lg rounded-lg">
          <div className="flex-grow overflow-y-auto p-4 bg-white shadow-md rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex my-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-3xl w-full ${
                    message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  <strong>{message.sender}: </strong>
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow p-2 border border-gray-300 rounded-l-md"
              placeholder="Type a message..."
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-r-md">
              Send
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={toggleChat}
        className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.63-.5 5.15-1.43l4.7 1.3-1.3-4.7C21.5 15.63 22 13.85 22 12c0-5.52-4.48-10-10-10zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default YojnaBuddy;
