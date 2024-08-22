import React, { useState } from "react";
import "./App.css";
import q1 from "./Imgs/Q1.gif";
import attention from "./Imgs/attention.gif";
import Question from "./components/Question.js";
import Boos from "./components/Boos.js";

function App() {
  const [curElem, setCurElem] = useState(0);

  const [attentionQues, setAttentionQues] = useState(false);
  const [impQues, setImpQues] = useState(false);

  const handleClick = () => {};
  return (
    <div className="App">
      <header className="App-header">
        {curElem == 0 ? (
          <Question
            gif={attention}
            text="Do I have your Attention??"
            setCurElem={setCurElem}
            curElem={curElem}
            btnText= "Boop Me!!!"
          />
        ) : curElem == 1 ? (
          <Question
            gif={q1}
            text="I have a very important question to ask"
            setCurElem={setCurElem}
            curElem={curElem}
            btnText = "Come here I will tell you"
          />
        ) : <Boos />}
      </header>
    </div>
  );
}

export default App;

{
  /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
}
