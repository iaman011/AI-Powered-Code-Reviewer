const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

/**
 * CORS configuration: allow production frontend from ENV and localhost in development
 */
const FRONTEND_URL = process.env.FRONTEND_URL || "https://ai-powered-code-reviewer-blue.vercel.app";
const allowedOrigins = [FRONTEND_URL];
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:5173', 'http://localhost:3000');
}

console.log('CORS allowed origins:', allowedOrigins);

app.use(cors({
  origin: (origin, callback) => {
    // allow non-browser requests like curl/postman (no origin)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
    console.log('CORS rejected origin:', origin);
    return callback(new Error('CORS policy: This origin is not allowed'));
  },
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
