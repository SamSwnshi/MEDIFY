import React from "react";
import homePic from "../assets/homeImg.png";
import "./Head.css";

const Head = () => {
  return (
    <div>
      <div className="head-container">
        <div>
          <div>
            <h2 className="intro">Skip the travel! Find Online</h2>
            <h1>
              <span className="medical">Medical</span>{" "}
              <span className="centers">Centers</span>
            </h1>
            <p className="paragraph">
              Connect instantly with a 24x7 specialist or chooose to video visit
              a particular doctor.
            </p>
          </div>
          <button className="centersbtn">Find Centers</button>
        </div>
        <div>
          <img src={homePic} alt="headingImage" className="heading-img" />
        </div>
      </div>
     
    </div>
  );
};

export default Head;
