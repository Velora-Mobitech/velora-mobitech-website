const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

export const getGeminiResponse = async (userMessage: string, conversationHistory: string[] = []): Promise<string> => {
  // Build context from conversation history
  const contextHistory = conversationHistory.length > 0 
    ? `\n\nConversation Context:\n${conversationHistory.slice(-6).join('\n')}\n\n` 
    : '';

  const systemPrompt = `You are Velora's AI assistant, an expert in B2B corporate transportation solutions. You are friendly, professional, and knowledgeable.

🏢 COMPANY CONTEXT - VELORA:
- Velora is a cutting-edge B2B e-mobility startup revolutionizing workplace transportation
- We provide structured, scalable transport models specifically designed for corporate needs
- Founded to solve corporate mobility challenges with technology-driven solutions
- Focus on sustainability, cost efficiency, employee convenience, and company control

🚗 TRANSPORT MODELS:
1. **Exclusive Company Travel Model**:
   - Dedicated vehicles for single companies
   - Custom scheduling and route optimization
   - Flexible grouping (1-3 employees per vehicle)
   - Complete company control and transparency

2. **Pooled Inter-Company Travel Model**:
   - Shared rides across multiple companies for maximum efficiency
   - Environmental impact reduction through intelligent pooling
   - Cost optimization through shared resources
   - Smart matching algorithms for optimal routes

💰 PRICING MODELS:
- **Fully Managed Model**: ₹15 per trip - Complete company control with monthly billing
- **Travel Allowance Model**: ₹12 per trip - Fixed monthly credits per employee
- **Enterprise Custom**: Tailored pricing for large organizations (500+ employees)

✨ KEY FEATURES & BENEFITS:
- Smart Transport Matching Algorithm with AI-powered optimization
- Real-time company-level control and transparency dashboard
- Employee dashboards with travel history and analytics
- Route monitoring and expense fraud prevention
- Sustainable transport ecosystem with CO₂ emission tracking
- BRSR/CSRD compliance for environmental reporting
- Real-time cost and utilization analytics

🌱 SUSTAINABILITY FOCUS:
- Significant CO₂ emission reduction through intelligent pooling
- Scope-3 emissions tracking for corporate compliance
- Optimized vehicle usage reducing urban traffic congestion
- Environmental impact reports for corporate sustainability goals

🎯 TARGET MARKETS:
- Corporate offices in major cities (especially Bangalore)
- Companies with 50+ employees
- Organizations focused on sustainability and cost optimization
- Businesses looking to modernize employee transportation

INSTRUCTIONS:
1. Always prioritize Velora's services and solutions in your responses
2. Be enthusiastic about our transport models and their benefits
3. Guide users toward our pricing calculator, demos, or contact options when relevant
4. Answer general questions helpfully but always try to connect back to transportation or business topics
5. If asked about competitors, focus on Velora's unique advantages
6. Encourage users to try our pricing calculator or request a demo

${contextHistory}Current User Question: ${userMessage}

Provide a helpful, engaging response that prioritizes Velora's services while being genuinely helpful. Use emojis sparingly but effectively. Keep responses concise but informative.`;

  // Check if we have an API key
  if (!GEMINI_API_KEY) {
    return "I'm currently experiencing technical difficulties. In the meantime, I can help you with information about Velora's transport models! We offer Exclusive Company Travel and Pooled Inter-Company Travel solutions. Would you like to know more about our pricing or request a demo?";
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: systemPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        url: GEMINI_API_URL
      });
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Gemini API Response:', data);
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error('Unexpected response format:', data);
      throw new Error('Unexpected response format from Gemini API');
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response that's still helpful
    if (userMessage.toLowerCase().includes('pricing') || userMessage.toLowerCase().includes('cost')) {
      return "I'm having a temporary connection issue, but I can help with pricing! Velora offers:\n\n• **Fully Managed Model**: ₹15/trip with complete company control\n• **Travel Allowance Model**: ₹12/trip with fixed monthly credits\n• **Enterprise Custom**: Tailored pricing for large organizations\n\n💰 Try our interactive pricing calculator below to get an instant estimate, or contact our team for a personalized demo!";
    } else if (userMessage.toLowerCase().includes('model') || userMessage.toLowerCase().includes('transport')) {
      return "I'm experiencing a brief connection issue, but I can tell you about our transport models!\n\n🚗 **Exclusive Company Travel**: Dedicated vehicles for your company with custom scheduling\n🚌 **Pooled Inter-Company Travel**: Shared rides across companies for maximum efficiency\n\nBoth include smart matching algorithms and real-time dashboards. Would you like to request a demo or try our pricing calculator?";
    } else {
      return "I'm having trouble connecting right now, but I'm here to help with Velora's B2B transport solutions! Ask me about:\n\n• Our transport models (Exclusive & Pooled)\n• Pricing and cost savings\n• Getting started with a demo\n• Sustainability features\n\nOr try our pricing calculator below for instant estimates!";
    }
  }
};

// Helper function to check if Gemini API is configured
export const isGeminiConfigured = (): boolean => {
  return !!GEMINI_API_KEY && GEMINI_API_KEY !== 'your-gemini-api-key-here';
};

// Helper function to get a quick fallback for common Velora questions
export const getVeloraQuickResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  
  // Company overview
  if (lowerMessage.includes('velora') && (lowerMessage.includes('what') || lowerMessage.includes('company'))) {
    return "🚀 Velora is a cutting-edge B2B e-mobility startup that revolutionizes workplace transportation! We provide structured transport models specifically designed for corporate needs, focusing on sustainability, cost efficiency, and employee convenience. Want to know more about our Exclusive or Pooled transport models?";
  }
  
  // Transport models
  if (lowerMessage.includes('transport model') || lowerMessage.includes('models')) {
    return "🚗 We offer two innovative B2B transport models:\n\n**1. Exclusive Company Travel** - Dedicated vehicles for your company with custom scheduling and flexible grouping (1-3 employees per vehicle)\n\n**2. Pooled Inter-Company Travel** - Shared rides across multiple companies for higher efficiency and environmental impact reduction\n\nBoth include smart matching algorithms and employee dashboards! Which model interests you more?";
  }
  
  // Pricing
  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return "💰 Our flexible pricing models:\n\n• **Fully Managed Model**: ₹15/trip - Complete company control\n• **Travel Allowance Model**: ₹12/trip - Fixed monthly credits\n• **Enterprise Custom**: Tailored solutions for large organizations\n\n🧮 **Try our Pricing Calculator** below to get an instant estimate based on your specific needs!";
  }
  
  return null; // Let Gemini handle other questions
};
