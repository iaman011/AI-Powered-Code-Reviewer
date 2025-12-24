import React, { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from 'react-simple-code-editor';
import prism from "prismjs";
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  // Highlight code when component mounts or code changes
  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  // Function to send code to backend and get review
  const reviewCode = async () => {
    if (!code.trim()) {
      alert('Please enter some code for review');
      return;
    }

    setLoading(true);
    setReview('');

    try {
      // Use environment variable for API base URL
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${apiBaseUrl}/ai/get-review`, { code }, {
        headers: { 'Content-Type': 'application/json' }
      });

      // Set review text from response
      setReview(response.data.review || 'No review returned');
    } catch (err) {
      console.error('Error fetching review:', err);
      setReview('Error fetching review: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            placeholder="Drop your code or query here for review"
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              backgroundColor: "#2d2d2d",
              color: "#f8f8f2",
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          disabled={loading}
          className="review-button"
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
