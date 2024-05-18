import React from 'react';
import "./Specialisation.css"


import doctor from "../assets/Doctor.png"

const Specialisation = () => {
  return (
    <div className='container-spec'>
      <h1 className='heading-text'>Find By Specialisation</h1>
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
      </div>
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
      </div>
      <button className='viewBtn'>View All</button>
    </div>
  )
}

export default Specialisation
