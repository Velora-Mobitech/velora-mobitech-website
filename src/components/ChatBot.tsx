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
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What are Velora's transport models?",
    "How does pricing work?",
    "What features do you offer?",
    "How do I get started?",
    "Tell me about sustainability",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for the chatbot
  const getResponse = (input: string): string => {
    const question = input.toLowerCase();

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
      question.includes("price")
    ) {
      return "We offer flexible pricing models:\n\n• **Fully Managed Model** - Complete company control with monthly billing based on actual usage\n• **Travel Allowance Model** - Fixed monthly credits per employee with route-based fare deduction\n• **Enterprise Custom** - Tailored solutions for large organizations\n\nFor detailed pricing, please click 'Get Demo' or contact our sales team.";
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
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
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
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 chatbot-pulse"
              size="icon"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              height: isMinimized ? "60px" : "500px",
            }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-80 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">Velora Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-col h-96"
                >
                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start gap-2 ${
                            message.isUser ? "justify-end" : "justify-start"
                          }`}
                        >
                          {!message.isUser && (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                          <div
                            className={`max-w-[250px] rounded-lg px-3 py-2 text-sm ${
                              message.isUser
                                ? "bg-primary text-primary-foreground ml-8"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <div className="whitespace-pre-wrap">
                              {message.text}
                            </div>
                            <div className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                          {message.isUser && (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Quick Questions */}
                      {showQuickQuestions && messages.length === 1 && (
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground px-2">
                            Quick questions:
                          </p>
                          {quickQuestions.map((question, index) => (
                            <button
                              key={index}
                              onClick={() => handleSendMessage(question)}
                              className="w-full text-left px-3 py-2 text-sm bg-secondary/50 hover:bg-secondary rounded-lg transition-colors duration-200"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  {/* Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about Velora..."
                        className="flex-1"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="sm"
                        disabled={!inputValue.trim() || isTyping}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
