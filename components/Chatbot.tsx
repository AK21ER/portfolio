import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatCircle, X, PaperPlane } from 'phosphor-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Rekik's AI assistant. Ask me anything about my projects like ELDCP, skills, or experience!", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage.trim() === 'hi') {
      return "Hello there! How can I assist you today? You can ask about my major project 'ELDCP' or other works like 'Medicine Guider'.";
    }

    // Projects - General
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return "I've worked on scalable systems like ELDCP (Ethiopian Language Data Collection Platform), Streamify, and Medicine Guider. ELDCP is particularly interesting—would you like to know its purpose or tech stack?";
    }

    // Specific Project: ELDCP
    if (lowerMessage.includes('eldcp') || lowerMessage.includes('collection') || lowerMessage.includes('language')) {
      return "ELDCP is a massive, university-focused platform I built to collect and validate high-quality voice datasets for training AI models. It features multi-phase validation, automated payments, and a secure contributor system. Tech stack: Next.js, Node.js, Prisma, PostgreSQL, Docker, and GitHub Actions.";
    }

    // Specific Project: Medicine Guider
    if (lowerMessage.includes('medicine')) {
      return "Medicine Guider is an AI-powered app that interprets medicine details from photos or names. It helps users understand usage and safety instructions clearly. Built with Next.js, Django, and OpenAI.";
    }

    // Specific Project: Streamify
    if (lowerMessage.includes('streamify')) {
      return "Streamify is a campus communication tool for real-time video calls and chat, helping students collaborate remotely. Tech stack: Vite, Node.js, MongoDB, and WebRTC.";
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('years')) {
      return "I have 4 years of experience crafting robust digital solutions, evolving from full-stack web development to AI integration.";
    }

    // Skills
    if (lowerMessage.includes('skills') || lowerMessage.includes('tech stack')) {
      return "My core stack includes React, Next.js, Node.js, NestJS, and Python (Django). I'm also proficient in Docker, PostgreSQL, and currently exploring NLP and LLMs.";
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('touch')) {
      return "You can reach me via the contact form on this site, or check out my GitHub profile linked in the navbar!";
    }

    // Current Status / Learning
    if (lowerMessage.includes('current') || lowerMessage.includes('doing now') || lowerMessage.includes('nlp')) {
      return "Currently, I'm diving deep into Natural Language Processing (NLP) at AAU, researching how to make AI systems better understand local languages.";
    }

    // Default
    return "That's a great question! I'm still learning, but I can tell you about my 'projects' (especially ELDCP), 'skills', 'experience', or how to 'contact' me.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with variable delay for realism
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChatCircle size={24} color="blue" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-white font-semibold">Chat with Rekik's AI</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                      ? 'bg-accent text-blue-900 rounded-tr-none'
                      : 'bg-gray-800 text-gray-200 rounded-tl-none border border-white/5'
                      }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Rekik..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleSend}
                  className="px-3 py-2 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <PaperPlane size={16} color="blue" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
