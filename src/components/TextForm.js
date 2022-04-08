import React, { useState } from 'react';

export default function TextForm(props) {
  const [myTxt, setMyTxt] = useState('');

  // Handling Convert to Uppercase btn 
  function convertToUpper() {
    setMyTxt(myTxt.toUpperCase());
    props.showAlert('success', 'Converted to uppercase.');
  }
  
  // Handling Convert to Lowercase btn 
  function convertToLower() {
    setMyTxt(myTxt.toLowerCase());
    props.showAlert('success', 'Converted to lowercase.');
  }
  
  // Handling Capitalize text btn 
  function capitalize() {
    setMyTxt(myTxt.charAt(0).toUpperCase() + myTxt.slice(1));
    props.showAlert('success', 'Capitalized text.');
  }
  
  // Handling Remove extra spaces btn 
  function removeExtraSpaces() {
    let mytxt = document.getElementById('mytxt');
    let l = mytxt.value.split(' ');
    for (let i = 0; i < l.length; i++) {
      if (l[i] === '') {
        l.splice(i, 1);
        i--;
      }
    }
    setMyTxt(l.join(' '));
    props.showAlert('success', 'Removed extra white spaces.');
  }
  
  // Handling Clear text btn 
  function clearTxt() {
    setMyTxt('');
    props.showAlert('success', 'Cleared text.');
  }
  
  // Handling Copy text btn 
  function copyTxt() {
    window.navigator.clipboard.writeText(myTxt);
    props.showAlert('success', 'Copied to clipboard.');
  }
  
  // Handling myTxt(HTML Input) onChange 
  function myTxtOnChange(e) {
    setMyTxt(e.target.value);
  };
  return (
    <>
      <div className="container mt-3">
        <label htmlFor="mytxt" className="form-label">
          <h2 className="mb-0">Enter text to analyze below</h2>
        </label>
        <div className="mb-3">
          <textarea className="form-control" id="mytxt" rows="10" placeholder="Write something..." onChange={myTxtOnChange} value={myTxt} style={{backgroundColor:props.isDarkMode?'#282c32':'white',color:props.isDarkMode?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={convertToUpper} type="submit" disabled={myTxt.length===0}>Conver to Uppercase</button>
        <button className="btn btn-primary me-2" onClick={convertToLower} type="submit" disabled={myTxt.length===0}>Convert to Lowercase</button>
        <button className="btn btn-primary me-2" onClick={capitalize} type="submit" disabled={myTxt.length===0}>Capitalize it</button>
        <button className="btn btn-primary me-2" onClick={removeExtraSpaces} type="submit" disabled={myTxt.length===0}>Remove extra spaces</button>
        <button className="btn btn-primary me-2" onClick={clearTxt} type="submit" disabled={myTxt.length===0}>Clear text</button>
        <button className="btn btn-primary me-2" onClick={copyTxt} type="submit" disabled={myTxt.length===0}>Copy text</button>
        <h2 className="mt-3">Your text summary</h2>
        <p><b>{myTxt.split(' ').length}</b> Words and <b>{myTxt.split('').length}</b> Characters</p>
        <p><b>{0.08*(myTxt.split(' ').length)}</b> Minutes read</p>
        <h2 className="mb-2">Preview</h2>
        <pre style={{fontFamily:'Arial'}}>{myTxt!==''?myTxt:'Nothing to preview!'}</pre>
      </div>
    </>
  );
}
