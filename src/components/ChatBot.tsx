import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  RotateCcw,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Velora's AI assistant. I can help you with information about our B2B transport models, pricing, features, or any general questions. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What are Velora's transport models?",
    "How does pricing work?",
    "Show me the pricing calculator",
    "How do I get started?",
    "Tell me about sustainability",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom && messages.length > 3);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for the chatbot
  const getResponse = (input: string): string => {
    const question = input.toLowerCase();

    // Handle pricing calculator requests
    if (
      question.includes("calculator") ||
      question.includes("calculate") ||
      question.includes("show me the pricing calculator") ||
      question.includes("estimate my cost")
    ) {
      // Scroll to calculator section
      setTimeout(() => {
        const calculatorElement = document.getElementById("calculator");
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      
      return "🧮 **Pricing Calculator**\n\nI'm scrolling you to our interactive pricing calculator below! You can:\n\n• Enter your company details (employee count, shifts)\n• Choose vehicle types (Sedan, SUV, Tempo Traveller)\n• Select service frequency (Daily, Weekly, Monthly)\n• Add premium features (AC, GPS tracking)\n• Get instant cost estimates and savings\n\nThe calculator will show you both the estimated monthly cost and potential savings compared to traditional transport. Try it out!";
    }

    // Company-specific responses
    if (question.includes("velora") || question.includes("company")) {
      return "Velora is an innovative e-mobility startup that revolutionizes workplace transportation through structured B2B transport models. We provide exclusive company travel and pooled inter-company travel systems designed specifically for corporate needs.";
    }

    if (question.includes("transport model") || question.includes("models")) {
      return "We offer two main B2B transport models:\n\n1. **Exclusive Company Travel Model** - Dedicated transportation for single companies with custom scheduling and flexible grouping (1-3 employees per cab)\n\n2. **Pooled Inter-Company Travel Model** - Shared rides across multiple companies for higher efficiency and environmental impact reduction\n\nBoth models include smart matching algorithms and employee dashboards.";
    }

    if (
      question.includes("pricing") ||
      question.includes("cost") ||
      question.includes("price") ||
      question.includes("calculator") ||
      question.includes("calculate")
    ) {
      return "We offer flexible pricing models:\n\n• **Fully Managed Model** - Complete company control with monthly billing based on actual usage\n• **Travel Allowance Model** - Fixed monthly credits per employee with route-based fare deduction\n• **Enterprise Custom** - Tailored solutions for large organizations\n\n💰 **Try our Pricing Calculator** below the pricing section on our homepage to get an instant estimate based on your specific needs!\n\nFor detailed pricing, please click 'Get Demo' or contact our sales team.";
    }

    if (question.includes("feature") || question.includes("benefit")) {
      return "Key features include:\n\n✅ Smart Transport Matching Algorithm\n✅ Company-Level Control & Transparency\n✅ Employee Dashboard & Analytics\n✅ Route monitoring and expense fraud prevention\n✅ Sustainable transport ecosystem\n✅ Real-time cost and utilization analytics\n✅ BRSR/CSRD compliance with CO₂ tracking";
    }

    if (
      question.includes("demo") ||
      question.includes("try") ||
      question.includes("get started")
    ) {
      return "Great! You can get started in two ways:\n\n🚀 **Get Started** - Try our live dashboard immediately\n📝 **Request Demo** - Fill out our demo form for a personalized consultation\n\nBoth options are available in the navigation bar. Would you like me to guide you to either option?";
    }

    if (question.includes("contact") || question.includes("support")) {
      return "You can reach us through:\n\n📧 Contact form on our 'Get Demo' page\n🌐 Visit our GitHub: https://github.com/Velora-Mobitech\n💼 LinkedIn: linkedin.com/company/velora-mobitech\n\nOur team typically responds within 24 hours for all inquiries.";
    }

    if (
      question.includes("sustainable") ||
      question.includes("environment") ||
      question.includes("green")
    ) {
      return "Sustainability is at our core! Our transport models focus on:\n\n🌍 Reducing CO₂ emissions through intelligent pooling\n📊 Scope-3 CO₂ tracking for BRSR/CSRD compliance\n🚗 Optimized vehicle usage to reduce urban traffic\n🌱 Environmental impact reduction in dense corporate zones\n\nEspecially effective in cities like Bengaluru where shared commuting significantly reduces individual vehicle use.";
    }

    if (
      question.includes("algorithm") ||
      question.includes("technology") ||
      question.includes("ai")
    ) {
      return "Our Smart Transport Matching Algorithm:\n\n🤖 Determines optimal vehicle types (bike, car, van, bus)\n⏰ Real-time scheduling based on bookings and traffic\n🗺️ Dynamic routing for cost-effectiveness\n📈 Minimizes environmental impact\n🔄 Continuous optimization based on usage patterns";
    }

    if (
      question.includes("employee") ||
      question.includes("dashboard") ||
      question.includes("personal")
    ) {
      return "Employee benefits include:\n\n📊 Personalized dashboards with travel history and costs\n🚫 No more repeated booking or reimbursement claims\n📱 Seamless ride experience with intelligent matching\n💰 Cost tracking and analytics\n🌿 Contribution to environmental sustainability\n📈 Real-time travel insights";
    }

    // General responses
    if (
      question.includes("hello") ||
      question.includes("hi") ||
      question.includes("hey")
    ) {
      return "Hello! Welcome to Velora. I'm here to help you learn about our B2B transport models and how we can revolutionize your company's mobility. What would you like to know?";
    }

    if (question.includes("help") || question.includes("what can you do")) {
      return "I can help you with:\n\n🚗 Information about our transport models\n💰 Pricing and working models\n🌟 Features and benefits\n📞 Contact information\n🚀 Getting started with demos\n♻️ Sustainability features\n🤖 Technology and algorithms\n\nJust ask me anything about Velora or corporate mobility!";
    }

    if (question.includes("thank") || question.includes("thanks")) {
      return "You're welcome! Is there anything else you'd like to know about Velora's transport models or corporate mobility solutions?";
    }

    // Default response for unknown queries
    return "I'd be happy to help you with that! Here are some topics I can assist with:\n\n• Transport Models (Exclusive & Pooled)\n• Pricing & Working Models\n• Features & Benefits\n• Getting Started/Demos\n• Sustainability & Technology\n• Contact Information\n\nCould you please rephrase your question or ask about any of these topics?";
  };

  const handleSendMessage = async (customMessage?: string) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowQuickQuestions(false);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(messageText),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hello! I'm Velora's AI assistant. I can help you with information about our B2B transport models, pricing, features, or any general questions. How can I assist you today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setShowQuickQuestions(true);
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={() => {
                console.log("Opening chat");
                setIsOpen(true);
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
              size="icon"
              type="button"
              aria-label="Open chat assistant"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <MessageCircle className="w-7 h-7 relative z-10" />
              </motion.div>

              <motion.div
                className="absolute top-2 right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-3 h-3 text-white/80" />
              </motion.div>
            </Button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            height: isMinimized ? "64px" : "600px",
          }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 w-96 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          style={{ 
            background: "hsl(var(--background) / 0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Fixed Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden flex-shrink-0 sticky top-0 z-20 rounded-t-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
            
            <div className="flex items-center gap-3 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center"
              >
                <Bot className="w-4 h-4" />
              </motion.div>
              <div>
                <span className="font-semibold text-sm">Velora Assistant</span>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 relative z-10">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                  title={isMinimized ? "Expand" : "Minimize"}
                >
                  <motion.div
                    animate={{ rotate: isMinimized ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Minimize2 className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-red-500/20 hover:text-red-100 rounded-lg transition-colors duration-200"
                  title="Close Chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col flex-1 relative"
            >
              {/* Messages Container with Custom Scrollbar */}
              <div className="flex-1 relative bg-background/50">
                <div 
                  ref={scrollAreaRef}
                  className="h-96 overflow-y-auto p-4 chatbot-scrollbar"
                  onScroll={handleScroll}
                >
                  <div className="space-y-4 pr-2">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-3 ${
                          message.isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        {!message.isUser && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md"
                          >
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </motion.div>
                        )}
                        <div
                          className={`max-w-[280px] rounded-2xl px-4 py-3 text-sm relative group ${
                            message.isUser
                              ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground ml-8 rounded-br-md"
                              : "bg-gradient-to-r from-muted to-muted/80 text-muted-foreground rounded-bl-md border border-border/50"
                          }`}
                        >
                          <div className="whitespace-pre-wrap leading-relaxed">
                            {message.text}
                          </div>
                          <div className="text-xs opacity-70 mt-2 flex items-center gap-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            {message.isUser && (
                              <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                            )}
                          </div>
                        </div>
                        {message.isUser && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center flex-shrink-0 shadow-md"
                          >
                            <User className="w-4 h-4 text-secondary-foreground" />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}

                    {/* Quick Questions */}
                    {showQuickQuestions && messages.length === 1 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-xs text-muted-foreground px-2 font-medium">
                          Quick questions:
                        </p>
                        {quickQuestions.map((question, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSendMessage(question)}
                            className="w-full text-left px-4 py-3 text-sm bg-gradient-to-r from-secondary/30 to-secondary/20 hover:from-secondary/50 hover:to-secondary/30 rounded-xl transition-all duration-200 border border-border/30 hover:border-primary/30 hover:shadow-md"
                          >
                            <span className="text-primary mr-2">•</span>
                            {question}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="bg-gradient-to-r from-muted to-muted/80 text-muted-foreground rounded-2xl rounded-bl-md px-4 py-3 text-sm border border-border/50">
                          <div className="flex gap-1">
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Scroll to Bottom Button */}
                {showScrollButton && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute bottom-4 right-4 z-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={scrollToBottom}
                      className="w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Fixed Input Area */}
              <div className="p-4 border-t border-border/50 bg-background/90 backdrop-blur-sm flex-shrink-0 sticky bottom-0 z-20 rounded-b-2xl">
                <div className="flex gap-3 items-end">
                  <div className="flex-1 relative">
                    <Input
                      id="chatbot-input"
                      name="chatbot-input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Velora..."
                      className="pr-12 py-3 rounded-xl border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm transition-all duration-200"
                      disabled={isTyping}
                      maxLength={500}
                      aria-label="Chat message input"
                    />
                    {inputValue && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <span className="text-xs text-muted-foreground">
                          {inputValue.length}/500
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleSendMessage()}
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                      className="h-11 w-11 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:scale-95"
                    >
                      {isTyping ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Bot className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </motion.div>
                </div>
                
                {/* Input help text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inputValue ? 0 : 1 }}
                  className="mt-2 text-xs text-muted-foreground text-center"
                >
                  Press Enter to send • Shift+Enter for new line
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
