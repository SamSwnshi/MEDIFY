import React from "react";
import "./Patient.css";
import caring1 from "../assets/caring1.png";
import caring2 from "../assets/caring2.png";
import caring3 from "../assets/caring3.png";
import { BsPatchCheckFill } from "react-icons/bs";

const Patient = () => {
  return (
    <div className="patient-wrapper">
      <div className="patient-body">
        <div className="image-container">
          <div>
            <img src={caring2} alt="patient-2" className="image-second" />
          </div>
          <div>
            <img src={caring1} alt="patient-1" className="image-first" />
          </div>
          <div>
            <img src={caring3} alt="patient-1" className="image-third" />
          </div>
        </div>
        <div className="patient-details">
          <h3 className="patient-subheading">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </h3>
          <h1 className="h1tag">
            <span className="heading1">Patient</span>{" "}
            <span className="heading2">Caring</span>
          </h1>
          <p className="patient-paragraph">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div className="tag">
            <BsPatchCheckFill className="verify-icons" />
            <p>Stay Updated About Your Health</p>
          </div>
          <div className="tag">
            <BsPatchCheckFill className="verify-icons" />
            <p>Check Your Results Online</p>
          </div>
          <div className="tag">
            <BsPatchCheckFill className="verify-icons" />
            <p>Manage Your Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
