import React from "react";
import "./Form.css";

import doctor from "../assets/Doctor.png";
import drug from "../assets/Drugstore.png";
import Capsule from "../assets/Capsule.png";
import Hosiptal from "../assets/Hospital.png";
import Ambulance from "../assets/Ambulance.png";
const Form = () => {
  return (
    <div className="form-wrapper">
      <div className="form-rapper">
      <div className="form">
        <div className="form-tag">
          <input type="text" className="form-input" placeholder="State" />
          <input type="text" className="form-input" placeholder="City" />
          <button className="form-search">Search</button>
        </div>
        <h2 className="heading-form">You may be looking for</h2>
      </div>
      <div className="card-container">
        <div className="search-cards">
          <img src={doctor} alt="doctor" className="search-image" />
          <h3 className="form-card-name">Doctors</h3>
        </div>
        <div className="search-cards">
          <img src={drug} alt="drug" className="search-image" />
          <h3 className="form-card-name">Labs</h3>
        </div>
        <div className="search-cards">
          <img src={Hosiptal} alt="Hospital" className="search-image" />
          <h3 className="form-card-name">Hospital</h3>
        </div>
        <div className="search-cards">
          <img src={Capsule} alt="Capsule" className="search-image" />
          <h3 className="form-card-name">Medical Store</h3>
        </div>
        <div className="search-cards">
          <img src={Ambulance} alt="Ambulance" className="search-image" />
          <h3 className="form-card-name">Ambulance</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Form;
