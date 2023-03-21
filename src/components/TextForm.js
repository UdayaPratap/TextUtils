import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Clicked uppercase"); 
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick=()=>{
        // console.log("Clicked uppercase"); 
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick=()=>{
       
        let newText='';
        setText(newText);
        props.showAlert("Cleared!", "success");
    }
    const handleOnChange=(event)=>{
        // console.log("Onchange");
        setText(event.target.value); 
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!", "success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed spaces!", "success");
    }
    const[text, setText]= useState('');


  return (
    <>
    <div className='container'  style={{color: props.mode==='light'? 'black' : 'white'}}> 
        <h1>{props.heading}</h1> 
        <div className="mb-3">
            <textarea placeholder='Enter text here...' className="form-control" style={{ backgroundColor: props.mode==='dark'? '#737373' : 'white', color: props.mode==='light'? 'black' : 'white'}} id="myBox" onChange={handleOnChange} value={text} rows="15"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>Word count: {text.split(" ").length}<br/> Character count: {text.length}</p>
        <p>{.008* text.split(" ").length} minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter something to preview here...'}</p>

    </div>
    </>
  )
}
