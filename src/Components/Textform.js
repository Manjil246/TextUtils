import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","Converted to Uppercase.")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Converted to Lowercase.")
    }

    const clearText = () => {
        setText("");
        props.showAlert("success","Text Cleared")
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleCopy  = () => {
        const cpy = document.getElementsByClassName('cpy');
        navigator.clipboard.writeText(cpy[0].value);
        props.showAlert("success","Text Copied.")
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("success","Extra spaces removed successfully.")
    }

    return (
        <div className={`text-${props.mode==="light"?"dark":"light"}`}>
            <div className="container">
                <div className="mb-3">
                    <h1>Enter The Text To Analyze</h1>
                    <textarea className="form-control my-3 cpy" style={{backgroundColor : props.mode==="light"?"white":"rgb(36, 26, 71)" , color : props.mode==="light"?"black":"white"}} value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>Number of words : {text.endsWith(" ")?(text.split(" ").length-1):(text.length===0?0:(text.split(" ").length))} Number of character : {text.length}</p>
            </div>
            <div className="container">
                <h1>Preface</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
