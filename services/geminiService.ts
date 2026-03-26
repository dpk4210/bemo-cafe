import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, OPENING_HOURS, ADDRESS } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are "BeMo", the friendly and helpful virtual barista of BeMo Cafe in Depok, Indonesia.
Your goal is to assist customers with menu recommendations, answering questions about the cafe, and just having a friendly chat.

Cafe Details:
- Name: BeMo Cafe
- Address: ${ADDRESS}
- Hours: ${OPENING_HOURS}
- Vibe: Cozy, Industrial, great for "WFC" (Work From Cafe), Hanging out.

Menu Context:
${JSON.stringify(MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description} - IDR ${item.price}`))}

Guidelines:
1. Be polite, casual, and welcoming.
2. If asked for recommendations, suggest items from the menu based on the user's preference (e.g., sweet, bitter, heavy meal, snack).
3. If specific details aren't known (like wifi password), say "I can check that for you at the counter!" or "Our staff will be happy to help with that when you arrive."
4. You can use a mix of English and casual Indonesian (Bahasa Gaul/Jaksel style) if the user speaks Indonesian, otherwise stick to English.
5. Keep responses concise (under 100 words) unless a long story is requested.
6. Emphasize the "BeMo Aren Latte" as the must-try signature drink.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) => {
  try {
    const client = getAIClient();
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, my brain needs a little more coffee! Please try asking again.";
  }
};