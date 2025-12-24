const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

/**
 * CORS configuration for Vercel frontend
 */
app.use(cors({
  origin: "https://ai-powered-code-reviewer-git-main-iaman011s-projects.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Handle preflight (OPTIONS) requests
app.options('*', cors());

app.use(express.json()); // to read JSON body

// Health check route
app.get('/', (req, res) => {
  res.send("Backend is live 🚀");
});

// Routes
// Any route starting with /ai will go to aiRoutes
app.use('/ai', aiRoutes);

module.exports = app;
