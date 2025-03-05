
const express = require('express');
const aiController = require("../controllers/ai.controller");

const router = express.Router();

// at this particular route, jo aap ka user rahega wo aap ke liye kuch prompt bhejega aur uss prompt ko ham yaha pe nikal lenge
// frontend se backend pahuchane ka jo method hota hai wo POST hota hai
// router.get('/get-response', aiController.getResponse);
router.post('/get-review', aiController.getReview);

module.exports = router;