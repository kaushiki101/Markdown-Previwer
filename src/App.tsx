import { useState } from "react";
import "./App.css"
import ReactMarkdown from "react-markdown";

function App(){
  const [markdown , setMarkdown] = useState<string>("");
   return(
    <div>
    <h1>Welcome to my React Markdown Previewer!</h1>
    <div className="container">
      <textarea name="editor" id="editor" value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
      <div id="preview"></div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
   );
}
 export default App;
