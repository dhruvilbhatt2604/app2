import React, {useState} from 'react'


export default function Textform(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleloClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    props.showAlert("Converted to LowerCase!", "success");
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("onChange");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <label fortext="my box" className="form-label"></label>
          <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:  props.mode==='dark'?'white':'black'}} id="MyBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to LowerCase</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0 }).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in textbox to preview it"}</p>
      </div>
      </>
  )
}