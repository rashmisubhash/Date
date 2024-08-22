import React, { useState } from "react";
import Success from "./Success.js";

import carry from "../Imgs/carry.gif";
import angry1 from "../Imgs/angry1.gif";
import angry2 from "../Imgs/angry2.gif";
import angry3 from "../Imgs/angry3.gif";
import angry4 from "../Imgs/angry4.gif";

const Rejections = () => {
  const [curElem, setCurElem] = useState(0);
  const [success, setSuccess] = useState(false)
  const [scenarios, setScenarios] = useState({
    0: [angry2, "Okay 💙", "Loser"],
    1: [angry1, "Yes 💜", "Are you Sure?"],
    2: [angry3, "Okay 💙", "Think Again!"],
    3: [angry4, "Okay, fine 💜", "Last Chance"],
    // ❤️
  });
  return !success ? (
    <>
      {curElem <= 3 ? (
        <div className="date-section">
          <img
            className="App-gif"
            src={scenarios[curElem][0]}
            alt={"altText"}
          />
          <h3>Will you go on a Date with me????</h3>
          <button onClick={() => setSuccess(true)} className="date-main date-yes">
            {scenarios[curElem][1]}
          </button>

          <button
            onClick={() => setCurElem(curElem + 1)}
            className="date-main date-no"
          >
            {scenarios[curElem][2]}
          </button>
        </div>
      ) : (
        <div>
          <img className="App-gif" src={carry} alt={"altText"} />
          <h3>Did you really think you had a choice?? I am taking you with me!!</h3>
        </div>
      )}
    </>
  ): <Success />;
};

export default Rejections;
