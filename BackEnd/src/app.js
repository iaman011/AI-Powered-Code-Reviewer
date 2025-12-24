const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// Allowed origins
const FRONTEND_URL = process.env.FRONTEND_URL || "https://ai-powered-code-reviewer-blue.vercel.app";
const allowedOrigins = [FRONTEND_URL];
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:5173', 'http://localhost:3000');
}

console.log('CORS allowed origins:', allowedOrigins);

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn('CORS rejected origin:', origin);
    return callback(null, false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options('*', cors()); // Preflight

app.use(express.json()); // JSON body parsing

// Health check
app.get('/', (req, res) => res.send("Backend is live 🚀"));

// AI Routes
app.use('/ai', aiRoutes);

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
