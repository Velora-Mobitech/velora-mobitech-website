// Test file to verify Gemini API connection
import { getGeminiResponse } from './gemini';

export const testGeminiConnection = async () => {
  console.log('Testing Gemini API connection...');
  console.log('API Key configured:', !!import.meta.env.VITE_GEMINI_API_KEY);
  
  try {
    const response = await getGeminiResponse('Hello, can you help me?');
    console.log('✅ Gemini API test successful!');
    console.log('Response:', response);
    return true;
  } catch (error) {
    console.error('❌ Gemini API test failed:', error);
    return false;
  }
};

// Auto-test when this file is imported (for debugging)
if (import.meta.env.DEV) {
  console.log('Environment variables check:');
  console.log('VITE_GEMINI_API_KEY exists:', !!import.meta.env.VITE_GEMINI_API_KEY);
  console.log('VITE_AI_ENABLED:', import.meta.env.VITE_AI_ENABLED);
}
