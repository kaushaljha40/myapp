import PropTypes from 'prop-types'

import React,{useState} from 'react'

export default function Containex() {
    const [text,setText]=useState('');

    const handleOnChange=(event)=>{
        
       setText(event.target.value)
    
      }

      const convertToUpper=(event)=>{
        
        setText(text.toUpperCase())
     
       }

       const convertToLower=(event)=>{
        
        setText(text.toLowerCase())
     
       }

       const clearText=(event)=>{
        
        let text='';
        setText(text);
     
       }
       let myStyle ={
           color :'white',
           backgroundColor :'black'
       }

    return (
      
        <>
        <div className="container" style={myStyle}>
            <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Comment</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
</div>
<div className="container">
    <button className="btn btn-primary mx-3" type="submit" onClick={convertToUpper}>Convert to Upper</button>
  
    <button className="btn btn-primary mx-3" type="submit" onClick={convertToLower}>Convert to Lower</button>
  
    <button className="btn btn-primary mx-3" type="submit" onClick={clearText}>Clear Text</button>
    <button className="btn btn-primary" type="submit" >Enable dark mode</button>

  </div>
        </div>

        <div className="container">
            <h3>Your text summarry</h3>
            <p> {text.length} length and {text.split(" ").length-1}</p>

            <h2>Preview</h2>
            <p>Your comment : {text}</p>


        </div>

        </>
    )
}
