import React from "react";
import img2 from "../images/2.gif";
import img3 from "../images/3.gif";
import img6 from "../images/6.gif";
import img4 from "../images/4.gif";
import time from "../images/time.gif";

function TextBox({ text, subText, name }) {
  return (
    <div className="row my-4 text-start align-items-center">
      <div className="col-2">
        {name === "img2" ? (
          <img src={img2} height="60%" width="60%" />
        ) : name === "img3" ? (
          <img src={img3} height="60%" width="60%" />
        ) : name === "img6" ? (
          <img src={img6} height="60%" width="60%" />
        ) : name === "time" ? (
          <img src={time} height="60%" width="60%" />
        ) : name === "img4" ? (
          <img src={img4} height="60%" width="60%" />
        ) : (
          <img src={name} height="60%" width="60%" />
        )}
      </div>
      <div className="col-10">
        <p className="mainText">{text}</p>
        <p className="subText">{subText}</p>
      </div>
    </div>
  );
}

export default TextBox;
