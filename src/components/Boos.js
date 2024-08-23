import React, { useState } from "react";
import "./common.scss";
import carry from "../Imgs/carry.gif";
import pp from "../Imgs/pp.gif";
import Rejections from "./Rejections";

const Boos = () => {
  const [curElem, setCurElem] = useState(0);

  return (
    <>
      {curElem == 0 ? (
        <div className="date-section">
          <img className="App-gif" src={pp} alt={"altText"} />
          <h2>Will you go on a Date with me????</h2>
          <button
            onClick={() => setCurElem(1)}
            className="date-main date-yes"
          >
            Yesss, Ofc!! 💙
          </button>

          <button
            onClick={() => setCurElem(2)}
            className="date-main date-no"
          >
            Nah
          </button>
        </div>
      ) : curElem == 1 ? (
        <Success />
      ) : (
       <Rejections />
      )}
    </>
  );
};

export default Boos;
