// source:
// https://aistudio.google.com/apikey
// https://ai.google.dev/gemini-api/docs#node.js   


const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);  //fetching from .env file
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

// we dont want to execute the code directly for which we create a function that accepts prompts as an argument and A.I. ko prompt dega and A.I. jo bhi content generate keke dega usko then ham user ko dikha payenge

async function generateContent(prompt){
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent;