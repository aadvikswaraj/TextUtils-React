import React from 'react'

export default function About(props) {
  return (
    <div className="container">
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: props.isDarkMode?'rgb(40, 44, 50)':'', color: props.isDarkMode?'white':''}}>
                <strong>Analyze Your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{background: props.isDarkMode?'rgb(71, 75, 82)':''}}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: props.isDarkMode?'rgb(40, 44, 50)':'', color: props.isDarkMode?'white':''}}>
                <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{background: props.isDarkMode?'rgb(71, 75, 82)':''}}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: props.isDarkMode?'rgb(40, 44, 50)':'', color: props.isDarkMode?'white':''}}>
                <strong>Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{background: props.isDarkMode?'rgb(71, 75, 82)':''}}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
