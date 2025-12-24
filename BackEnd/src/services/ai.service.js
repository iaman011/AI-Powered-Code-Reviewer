// ai.service.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure API key exists
if (!process.env.GOOGLE_GEMINI_KEY) {
  console.error("ERROR: GOOGLE_GEMINI_KEY is not set in environment variables!");
  throw new Error("Missing Google Gemini API Key");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
    Whenever a user provides a code snippet in any programming language, analyze, correct errors,
    optimize performance, improve readability, add comments, and provide structured explanation.
  `
});

/**
 * Generates AI review for user-provided code
 * @param {string} prompt - The code snippet or prompt from user
 * @returns {Promise<string>} - The AI generated review text
 */
async function generateContent(prompt) {
  if (!prompt) throw new Error("Prompt is required for AI content generation");

  try {
    const result = await model.generateContent(prompt);

    // Ensure result exists
    if (!result?.response?.text) {
      throw new Error("AI returned empty response");
    }

    return result.response.text();
  } catch (err) {
    console.error("AI SERVICE ERROR:", err);
    throw new Error("Failed to generate AI review. Please check logs.");
  }
}

module.exports = generateContent;
