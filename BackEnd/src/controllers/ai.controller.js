// basically, this files contain route handling known as controller at production level

const aiService = require("../services/ai.service");

module.exports.getResponse = async (req,res) => {
    const prompt = req.query.prompt;

    // if by chance hmare pass prompt nahi aata hai
    if (!prompt){
        return res.status(400).send("prompt is required");
    }

    const response = await aiService(prompt);

    res.send(response);
}