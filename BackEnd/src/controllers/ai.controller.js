// // basically, this files contain route handling known as controller at production level

// const aiService = require("../services/ai.service");

// module.exports.getReview = async (req,res) => {
//     const code = req.body.code;

//     // if by chance hmare pass prompt nahi aata hai
//     if (!code){
//         return res.status(400).send("prompt is required");
//     }

//     const response = await aiService(code);

//     res.send(response);
// }

// this file contains route handling logic (controller)

const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    // validation
    if (!code) {
      return res.status(400).json("Code is required");
    }

    // call AI service
    const response = await aiService(code);

    // send response back to frontend
    return res.json(response);

  } catch (error) {
    // VERY IMPORTANT: never let error escape
    console.error("AI CONTROLLER ERROR:", error);

    return res.status(500).json(
      "Internal Server Error while generating AI review"
    );
  }
};
