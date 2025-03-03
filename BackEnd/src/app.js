const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app =express();

app.get('/', (req,res) => {
    res.send("heloo! World");
});

// load the routes for aiRoutes ki agar koi bhi route /ai se shuru ho rha hai toh usse aiRoutes pe bhej do
app.use('/ai', aiRoutes);

module.exports = app;