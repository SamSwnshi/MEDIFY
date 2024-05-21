import React from "react";
import "./Specialisation.css";

import blood from "../assets/Blood.png";
import drug from "../assets/drug.png";
import heart from "../assets/heart.png";
import rate from "../assets/rate.png";
import Immune from "../assets/Immune.png";
import scope from "../assets/scope.png";
import xray from "../assets/X-Ray.png";

const Specialisation = () => {
  return (
    <div className="container-spec">
      <h1 className="heading-text">Find By Specialisation</h1>
      <div >
        <div className="card-container">
          <div className="cards">
            <img src={drug} alt="drug" className="image" />
            <h3 className="card-name">Dentistry</h3>
          </div>
          <div className="cards">
            <img src={scope} alt="scope" className="image" />
            <h3 className="card-name">Primary Care</h3>
          </div>
          <div className="cards">
            <img src={rate} alt="rate" className="image" />
            <h3 className="card-name">Cardiology</h3>
          </div>
          <div className="cards">
            <img src={heart} alt="heart" className="image" />
            <h3 className="card-name">MRI Resonance</h3>
          </div>
        </div>
        <div className="card-container">
          <div className="cards">
            <img src={blood} alt="blood" className="image" />
            <h3 className="card-name">Blood Test</h3>
          </div>
          <div className="cards">
            <img src={Immune} alt="Immune" className="image" />
            <h3 className="card-name">Piscologist</h3>
          </div>
          <div className="cards">
            <img src={drug} alt="drug" className="image" />
            <h3 className="card-name">Laboratory</h3>
          </div>
          <div className="cards">
            <img src={xray} alt="xray" className="image" />
            <h3 className="card-name">X-Ray</h3>
          </div>
        </div>
      </div>
      <button className="viewBtn">View All</button>
    </div>
  );
};

export default Specialisation;
