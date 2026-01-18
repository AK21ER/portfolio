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
    { id: 1, text: "Hi! I'm Rekik's AI assistant. Ask me anything about Rekik", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('experience') || lowerMessage.includes('years')) {
      return "I have 4 years of experience crafting robust digital solutions.";
    }

    if (lowerMessage.includes('skills') || lowerMessage.includes('tech')) {
      return "My tech skills includes NestJS, Express, Node.js, React, Next.js, Docker, Django, Tailwind, Shadcn UI, and React Native.";
    }

    if (lowerMessage.includes('current') || lowerMessage.includes('work') || lowerMessage.includes('nlp') || lowerMessage.includes('ai')) {
      return "Currently, I'm diving deep into Natural Language Processing systems for Machine Learning and AI research at AAU, pushing the boundaries of how machines understand human interaction.";
    }

    if (lowerMessage.includes('name') || lowerMessage.includes('who')) {
      return "I'm Rekik, also known as AK21ER, a developer passionate about creating innovative digital solutions.";
    }

    if (lowerMessage.includes('background') || lowerMessage.includes('about')) {
      return "I'm a developer with 4 years of experience, currently focusing on NLP and AI research at AAU.";
    }

    if (lowerMessage.includes('frontend') || lowerMessage.includes('front-end')) {
      return "My frontend skills include React (Advanced), Next.js (Advanced), TypeScript (Intermediate), Tailwind CSS (Advanced), and Framer Motion (Intermediate).";
    }

    if (lowerMessage.includes('backend') || lowerMessage.includes('back-end')) {
      return "My backend skills include Node.js (Advanced), NestJS (Advanced), Express (Advanced), Django (Intermediate), and PostgreSQL (Intermediate).";
    }

    if (lowerMessage.includes('devops') || lowerMessage.includes('dev-ops')) {
      return "My DevOps skills include Docker (Intermediate), Kubernetes (Beginner), AWS (Intermediate), and CI/CD (Intermediate).";
    }

    if (lowerMessage.includes('version control') || lowerMessage.includes('git')) {
      return "My version control skills include Git (Advanced), GitHub (Advanced), and GitLab (Intermediate).";
    }

    if (lowerMessage.includes('tools')) {
      return "My tool skills include VS Code (Advanced), Postman (Advanced), Figma (Intermediate), and Vite (Intermediate).";
    }

    return "That's an interesting question! Feel free to ask about my experience, skills, or current work. You can also ask about specific skill categories like frontend, backend, devops, version control, or tools.";
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
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
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-accent text-blue-900'
                        : 'bg-gray-800 text-blue-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
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
