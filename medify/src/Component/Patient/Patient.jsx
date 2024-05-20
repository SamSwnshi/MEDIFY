import React from "react";
import "./Patient.css";
import caring1 from "../assets/caring1.png"
import { BsPatchCheckFill } from "react-icons/bs";

const Patient = () => {
  return (
    <div className="patient-wrapper">
      <div className="patient-body">
        <div>
          <img src={caring1} alt="" />
        </div>
        <div className="patient-details">
          <h3>HELPING PATIENTS FROM AROUND THE GLOBE!!</h3>
          <h1>Patient Caring</h1>
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <p><BsPatchCheckFill />Stay Updated About Your Health</p>
          <p><BsPatchCheckFill />Check Your Results Online</p>
          <p><BsPatchCheckFill />Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default Patient;
