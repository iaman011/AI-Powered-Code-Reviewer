import React, { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css"; // Prism theme
import Editor from 'react-simple-code-editor';
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // load JS syntax
import "prismjs/components/prism-python";     // load Python syntax (optional)
import "prismjs/components/prism-css";        // load CSS syntax (optional)
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Markdown highlight
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  // Prism re-highlighting whenever code changes
  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  const reviewCode = async () => {
    if (!code.trim()) {
      alert('Please enter some code for review');
      return;
    }

    setLoading(true);
    setReview('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${apiBaseUrl}/ai/get-review`, { code }, {
        headers: { 'Content-Type': 'application/json' }
      });

      setReview(response.data.review || 'No review returned');
    } catch (err) {
      console.error('Error fetching review:', err);
      setReview('Error fetching review: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ display: 'flex', height: '100vh', backgroundColor: '#000', color: '#fff', padding: '20px', boxSizing: 'border-box' }}>
      <div className="left" style={{ flex: 1, marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
        <div className="code" style={{ flex: 1, marginBottom: '10px' }}>
          <Editor
            placeholder="Drop your code or query here for review"
            value={code}
            onValueChange={setCode}
            highlight={highlightCode} // Prism highlighting enabled
            padding={10}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              backgroundColor: "#000",
              color: "#f8f8f2",
              border: "1px solid #333",
              outline: "none"
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          disabled={loading}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right" style={{ flex: 1, marginLeft: '10px', overflowY: 'auto', padding: '10px', backgroundColor: "#111", borderRadius: "5px" }}>
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
