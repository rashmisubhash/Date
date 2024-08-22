import React from "react";

const Question = ({ gif, text, setCurElem, curElem, btnText }) => (
  <>
    <img className="App-gif" src={gif} alt={"altText"} />
    <h2>{text}</h2>
    <button onClick={() => setCurElem(curElem + 1)} className = "btn btn--doar">{btnText}</button>
  </>
);

export default Question;
