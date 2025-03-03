// basically, this files contain route handling known as controller at production level

const aiService = require("../services/ai.service");

module.exports.getReview = async (req,res) => {
    const code = req.body.code;

    // if by chance hmare pass prompt nahi aata hai
    if (!code){
        return res.status(400).send("prompt is required");
    }

    const response = await aiService(code);

    res.send(response);
}