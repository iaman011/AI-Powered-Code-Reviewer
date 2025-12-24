// ai.controller.js
const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    // Validate input
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    // Call AI service
    const response = await aiService(code);

    // Return AI review to frontend
    return res.status(200).json({ review: response });

  } catch (error) {
    console.error("AI CONTROLLER ERROR:", error);

    return res.status(500).json({
      error: "Internal Server Error while generating AI review",
      message: error.message
    });
  }
};
