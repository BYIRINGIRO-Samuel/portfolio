import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Typing Text Component
  const TypingText: React.FC<{ text: string; isTyping: boolean }> = ({ text, isTyping }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      // Reset when starting new typing
      if (isTyping && currentIndex === 0 && displayedText === '') {
        setDisplayedText('');
        setCurrentIndex(0);
      }
    }, [isTyping]);

    useEffect(() => {
      if (!isTyping) {
        setDisplayedText(text);
        setCurrentIndex(text.length);
        return;
      }

      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(text.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, 40);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, text, isTyping]);

    // Reset when text changes
    useEffect(() => {
      if (isTyping) {
        setDisplayedText('');
        setCurrentIndex(0);
      }
    }, [text]);

    return (
      <span className="font-mono text-sm leading-relaxed">
        {displayedText}
        {isTyping && currentIndex < text.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-0.5 h-4 bg-white/60 ml-1"
          />
        )}
      </span>
    );
  };

  // Initialize with typing welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hello! I'm Samy, Samuel's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
        isTyping: true
      };
      setMessages([welcomeMessage]);
      setTypingMessageId('welcome');
      
      // Start typing animation for welcome message
      const typingDuration = welcomeMessage.text.length * 25 + 800;
      setTimeout(() => {
        setTypingMessageId(null);
        setMessages(prev => prev.map(msg => 
          msg.id === 'welcome' ? { ...msg, isTyping: false } : msg
        ));
      }, typingDuration);
    }
  }, [isOpen, messages.length]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickActions = [
    { text: "Tell me about his skills", icon: "🚀" },
    { text: "Show me his projects", icon: "💼" },
    { text: "What's his experience?", icon: "⭐" },
    { text: "How can I contact him?", icon: "📧" }
  ];

  const handleQuickAction = (actionText: string) => {
    setInputValue(actionText);
    setShowQuickActions(false);
    setTimeout(() => handleSendMessage(actionText), 100);
  };

  const botResponses = {
    skills: [
      "Samuel is proficient in React, TypeScript, Node.js, Python, Java, and many other technologies. He specializes in full-stack development with expertise in modern frameworks and cloud technologies.",
      "His tech stack includes React, Vue.js, Angular for frontend, Node.js, Express, Spring Boot for backend, plus databases like MongoDB, PostgreSQL, and Redis. He's also skilled in Docker, AWS, and CI/CD pipelines.",
      "Samuel excels in modern web technologies: React with TypeScript, Next.js, Tailwind CSS, Framer Motion for animations, plus backend technologies like Node.js, Python Flask/Django, and Java Spring."
    ],
    projects: [
      "Samuel has completed 20+ projects including web applications, mobile apps, and system integrations. His portfolio showcases innovative solutions using cutting-edge technologies.",
      "His recent projects include e-commerce platforms with real-time features, AI-powered applications, mobile apps with React Native, and full-stack web applications with modern UI/UX design.",
      "Check out his portfolio sections to see projects ranging from neural network visualizations to complex business applications. Each project demonstrates his commitment to clean code and user experience."
    ],
    experience: [
      "With 2+ years of experience, Samuel has worked on diverse projects ranging from e-commerce platforms to AI-powered applications. He maintains 100% code quality standards.",
      "Samuel's experience spans frontend development, backend architecture, database design, and DevOps practices. He's worked with startups and established companies, delivering scalable solutions.",
      "His professional journey includes roles in full-stack development, where he's led projects from conception to deployment, mentored junior developers, and implemented best practices."
    ],
    contact: [
      "You can reach Samuel through the contact form on this website, or connect with him on LinkedIn. He's always open to discussing new opportunities and collaborations.",
      "Samuel is available for freelance projects, full-time opportunities, or technical consultations. Use the contact section below or reach out via his professional networks.",
      "Feel free to contact Samuel for project discussions, technical questions, or collaboration opportunities. He typically responds within 24 hours."
    ],
    education: [
      "Samuel has a strong educational background in computer science and continuously updates his skills through online courses and certifications.",
      "He's completed various certifications in cloud computing, modern web frameworks, and software architecture. Samuel believes in continuous learning and stays updated with industry trends.",
      "His learning journey includes formal education, online courses from platforms like Coursera and Udemy, and hands-on project experience that reinforces theoretical knowledge."
    ],
    about: [
      "Samuel is a passionate full-stack developer from Kigali, Rwanda, who loves building innovative solutions that make a difference. He combines technical expertise with creative problem-solving.",
      "Based in Kigali, Rwanda, Samuel is known for his attention to detail, clean code practices, and ability to translate complex requirements into elegant solutions.",
      "Samuel's approach to development focuses on user experience, performance optimization, and maintainable code. He enjoys working on challenging projects that push technological boundaries."
    ],
    default: [
      "That's an interesting question! I'd recommend exploring Samuel's portfolio sections or using the contact form to get more specific information about his work and capabilities.",
      "I'm here to help you learn about Samuel's professional background. Try asking about his skills, projects, experience, or how to get in touch with him.",
      "Great question! Feel free to explore different sections of the portfolio, or ask me about Samuel's technical skills, project experience, or professional background."
    ]
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    let responseCategory = 'default';
    
    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech') || lowerInput.includes('programming')) {
      responseCategory = 'skills';
    } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio') || lowerInput.includes('build')) {
      responseCategory = 'projects';
    } else if (lowerInput.includes('experience') || lowerInput.includes('background') || lowerInput.includes('career') || lowerInput.includes('job')) {
      responseCategory = 'experience';
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('hire')) {
      responseCategory = 'contact';
    } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('learn') || lowerInput.includes('course')) {
      responseCategory = 'education';
    } else if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('samuel') || lowerInput.includes('tell me')) {
      responseCategory = 'about';
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Great to meet you! I'm Samy, Samuel's AI assistant, here to help you learn more about his professional journey. What specific area interests you most - his skills, projects, or experience?";
    } else if (lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
      return "You're welcome! I'm happy to help you learn more about Samuel. Is there anything else you'd like to know about his work or background?";
    }
    
    const responses = botResponses[responseCategory as keyof typeof botResponses];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim() || isTyping || typingMessageId !== null) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickActions(false);
    
    // Scroll to show user message
    setTimeout(() => scrollToBottom(), 50);
    
    // Start thinking animation
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = getResponse(textToSend);
      const botMessageId = (Date.now() + 1).toString();
      
      const botResponse: Message = {
        id: botMessageId,
        text: responseText,
        isBot: true,
        timestamp: new Date(),
        isTyping: true
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setTypingMessageId(botMessageId);
      
      // Scroll to show bot response
      setTimeout(() => scrollToBottom(), 100);
      
      // Start typing animation with proper timing
      const typingDuration = responseText.length * 40 + 800;
      setTimeout(() => {
        setTypingMessageId(null);
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, isTyping: false } : msg
        ));
      }, typingDuration);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isTyping && typingMessageId === null) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'hidden' : 'flex'} items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl hover:shadow-white/10 transition-all duration-300 group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 rounded-full bg-white/5 opacity-75 blur-lg animate-pulse" />
        
        {/* Neural Network Pattern */}
        <svg className="absolute inset-2 w-12 h-12 opacity-20" viewBox="0 0 48 48">
          <circle cx="12" cy="12" r="2" fill="white" />
          <circle cx="36" cy="12" r="2" fill="white" />
          <circle cx="24" cy="24" r="2" fill="white" />
          <circle cx="12" cy="36" r="2" fill="white" />
          <circle cx="36" cy="36" r="2" fill="white" />
          <line x1="12" y1="12" x2="24" y2="24" stroke="white" strokeWidth="0.5" />
          <line x1="36" y1="12" x2="24" y2="24" stroke="white" strokeWidth="0.5" />
          <line x1="24" y1="24" x2="12" y2="36" stroke="white" strokeWidth="0.5" />
          <line x1="24" y1="24" x2="36" y2="36" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Profile Image Icon */}
        <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
          <img 
            src="/hero-character.png" 
            alt="Samy - Samuel's AI Assistant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/5" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-4 h-4 text-white/80 drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-white/30"
        />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ask Samy anything about Samuel!
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-[#0f0f0f] border border-white/20 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src="/hero-character.png" 
                      alt="Samy - Samuel's AI Assistant" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f0f0f] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Samy</h3>
                  <p className="text-white/60 text-xs">Samuel's Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 h-[340px] chat-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <img 
                          src="/hero-character.png" 
                          alt="Samy" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className={`max-w-[75%] ${message.isBot ? '' : 'flex flex-col items-end'}`}>
                    <div className={`p-4 rounded-2xl backdrop-blur-sm ${
                      message.isBot 
                        ? 'bg-white/5 border border-white/10 text-white rounded-tl-sm' 
                        : 'bg-white/90 text-gray-900 rounded-tr-sm shadow-lg'
                    }`}>
                      {message.isBot ? (
                        <TypingText 
                          text={message.text} 
                          isTyping={message.isTyping || typingMessageId === message.id} 
                        />
                      ) : (
                        <p className="font-medium text-sm leading-relaxed">{message.text}</p>
                      )}
                    </div>
                    <p className={`text-xs text-white/40 mt-1 px-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Cool Matrix-Style Thinking Animation */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 relative">
                      <img 
                        src="/hero-character.png" 
                        alt="Samy" 
                        className="w-full h-full object-cover"
                      />
                      {/* Scanning line effect */}
                      <motion.div
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-0.5 bg-white/40 blur-sm"
                      />
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm backdrop-blur-sm relative overflow-hidden min-w-[120px]">
                    {/* Matrix rain effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: ['-100%', '200%'] }}
                          transition={{ 
                            duration: 1.5 + Math.random() * 0.5, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 0.2
                          }}
                          className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                          style={{ left: `${20 + i * 15}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Main content */}
                    <div className="relative z-10 flex items-center space-x-3">
                      {/* Hexagonal loading spinner */}
                      <div className="relative w-6 h-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/60">
                            <polygon 
                              points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="1.5"
                              strokeDasharray="4 2"
                            />
                          </svg>
                        </motion.div>
                        
                        {/* Inner rotating element */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-2"
                        >
                          <div className="w-full h-full border border-white/40 rounded-full" />
                        </motion.div>
                        
                        {/* Center dot */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </motion.div>
                      </div>
                      
                      {/* Animated text with typewriter effect */}
                      <div className="flex flex-col">
                        <motion.div className="flex items-center space-x-1">
                          <span className="text-xs text-white/70 font-mono">ANALYZING</span>
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                              className="text-xs text-white/70 font-mono"
                            >
                              .
                            </motion.span>
                          ))}
                        </motion.div>
                        
                        {/* Binary-style progress bar */}
                        <div className="flex space-x-0.5 mt-1">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                opacity: [0.2, 1, 0.2],
                                scaleY: [0.5, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 0.8, 
                                repeat: Infinity, 
                                delay: i * 0.1 
                              }}
                              className="w-0.5 h-2 bg-white/50 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Glitch effect overlay */}
                    <motion.div
                      animate={{ 
                        opacity: [0, 0.1, 0],
                        x: [0, 2, -1, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        times: [0, 0.1, 0.2, 1]
                      }}
                      className="absolute inset-0 bg-white/5 mix-blend-overlay"
                    />
                  </div>
                </motion.div>
              )}

              {/* Quick Actions */}
              {showQuickActions && messages.length <= 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 gap-2 mb-4"
                >
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickAction(action.text)}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white/80 hover:text-white transition-all text-left backdrop-blur-sm"
                    >
                      <span className="mr-2 text-sm">{action.icon}</span>
                      <span className="font-medium">{action.text}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 p-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isTyping ? "AI is thinking..." : "Ask me about Samuel's work..."}
                  disabled={isTyping || typingMessageId !== null}
                  className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none px-2 py-1 disabled:opacity-50"
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping || typingMessageId !== null}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-gray-200 disabled:hover:bg-white"
                >
                  <Send className="w-4 h-4 text-black" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;