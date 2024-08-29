"use server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateChatResponse = async (chatMessage) => {
  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistance" },
        ...chatMessage,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 100,
    });
    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    return null;
  }
};
