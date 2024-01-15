import { useState } from "react";
import "./App.css"
import ReactMarkdown from "react-markdown"



 const defaultMarkdown = `
 Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, <div></div>, between 2 backticks.



You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

 -And of course there are lists.
 -Some are bulleted.
 -With different indentation levels.
 -That look like this.


 And there are numbered lists too.
 Use just 1s if you want!
 And last but not least, let's not forget embedded images:

`

function App(){
  const [markdown , setMarkdown] = useState(defaultMarkdown);
  const eventhandle =(e) =>{
    setMarkdown(e.target.value)
  }
   return(
    <div>
    <h1>Welcome to my React Markdown Previewer!</h1>
    <div className="container">
      <textarea name="editor" id="editor" rows="19" cols= "38" value={markdown} onChange={eventhandle} ></textarea>
      <div id="preview"></div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
   );
}
 export default App;
