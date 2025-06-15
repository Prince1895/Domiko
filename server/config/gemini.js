import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ correct package

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // ✅ just pass API key, no credentials

async function main1(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text; //
}

export default main1;
