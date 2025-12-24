const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// CORS setup...
const FRONTEND_URL = process.env.FRONTEND_URL || "https://ai-powered-code-reviewer-blue.vercel.app";
const allowedOrigins = [FRONTEND_URL];
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:5173', 'http://localhost:3000');
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(null, false);
  },
  credentials: true
}));

app.use(express.json());
app.use('/ai', aiRoutes);

app.get('/', (req, res) => res.send("Backend is live 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
