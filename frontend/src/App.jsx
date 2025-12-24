import React, { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import prism from "prismjs"
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App () {

  const[count, setCount]= useState(0);
  const[code, setCode] = useState(``);

  const [review, setReview] = useState(``);


  useEffect (() => {
    prism.highlightAll();
  }, []);

  // iss function ke andar ham backend pe ek request bhejenge aur uss request ke saath jo code hai wo bhejenge aur 
  // backend pe jo hmara server hai usme jo A.I. hai wo uss code ko dekhega aur review krke dega
async function reviewCode() {
  // axios.post('http://localhost:3000/ai/get-review', { code})  ye code hame response la ke dega so we store it in response
 const response = await axios.post('https://ai-powered-code-reviewer-blue.vercel.app//ai/get-review', { code})

  // const response = await axios.post('http://localhost:3000/ai/get-review', { code})

  // console.log(response.data);

  setReview(response.data);
}

  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          {/* prismjs , Editor*/}
          <Editor
              placeholder="Drop your code or query here for review"
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={2}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
        </div>
        <div 
        onClick={reviewCode}
        className="review">Review</div>
      </div>

      <div className="right">
        {/* markdown is used to make output in better readable format instead of para */}
        <Markdown
         rehypePlugins={[ rehypeHighlight ]}
        >{review}</Markdown>
      </div>
    </main>
    </>
  )
}


export default App
