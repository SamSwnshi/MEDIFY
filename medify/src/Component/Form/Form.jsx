import React from "react";
import "./Form.css";

import doctor from "../assets/Doctor.png"
const Form = () => {
  return (
    <div className="form-wrapper">
    <div className="form">
      <div>
        <input type="text" />
        <input type="text" />
        <button>Search</button>
      </div>
      <h2>You may be looking for</h2>
      <div className="card-container">
        <div className="cards">
            <img src={doctor} alt="doctor" className="image" />
            <h3>Doctors</h3>
        </div>
        <div className="cards">
            <img src={doctor} alt="doctor" className="image" />
            <h3>Doctors</h3>
        </div>
        <div className="cards">
            <img src={doctor} alt="doctor" className="image" />
            <h3>Doctors</h3>
        </div>
        <div className="cards">
            <img src={doctor} alt="doctor" className="image" />
            <h3>Doctors</h3>
        </div>
        <div className="cards">
            <img src={doctor} alt="doctor" className="image" />
            <h3>Doctors</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
