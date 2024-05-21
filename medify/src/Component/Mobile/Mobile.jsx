import React from "react";
import "./Mobile.css";
import fram1 from "../assets/frame1.png";
import fram2 from "../assets/frame2.png";
import image from "../assets/image2.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
const Mobile = () => {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-box">
        <div className="mobile-container">
          <div className="mobile-one">
            <img src={fram1} alt="frame"  className="image-frame"/>
            <img src={image} alt="imagein" className="image-photo" />
          </div>
          <div className="mobile-two">
            <img src={fram2} alt="frame" className="image-frameTwo"/>
            <img src={image} alt="imagein" className="image-phototwo"  />
          </div>
        </div>
        <div className="mobile-download">
          <div className="mobile-text">
            <p className="mobile-para">
              Download the  <span className="mobile-span">Medlify</span>App
            </p>
          </div>
            <p className="text-tag">Get the Link to download the app</p>

          <div className="mobile-input">
            <button className="mobile-code">+91</button>
            <input type="text" placeholder="Enter phone number" className="mobile-input"/>
            <button className="mobile-sms">Send SMS</button>
          </div>

          <div className="mobile-div">
            <img src={apple} alt="apple" className="mobile-app"/>
            <img src={google} alt="google" className="mobile-app"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
