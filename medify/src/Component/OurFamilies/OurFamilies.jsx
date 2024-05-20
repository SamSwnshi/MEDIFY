import React from "react";
import "./OurFamilies.css";
import hand from "../assets/hand.png";
import yellowH from "../assets/yellowH.png";
import building from "../assets/building.png";
import person from "../assets/person.png";

const OurFamilies = () => {
  return (
    <div className="familes-wrapper">
      <div className="familes-details">
        <h4 className="heading-one">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
        </h4>
        <h2 className="heading-two">Our Families</h2>
        <p className="para">
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className="familes-card">
        <div className="card-containerOne">
          <div className="cards">
            <div className="main-box">
              <img src={hand} alt="hand" className="image" />
              <h3 className="number">5000+</h3>
              <p className="detail">Happy Patients</p>
            </div>
          </div>
          <div className="cards">
            <img src={yellowH} alt="hospital" className="image" />
            <h3 className="number">1000+</h3>
            <p className="detail">Laboratories</p>
          </div>
        </div>
        <div>
          <div className="card-containerTwo">
            <div className="cards">
              <img src={building} alt="building" className="image" />
              <h3 className="number">200+</h3>
              <p className="detail">Hospitals</p>
            </div>
            <div className="cards">
              <img src={person} alt="person" className="image" />
              <h3 className="number">700+</h3>
              <p className="detail">Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFamilies;
