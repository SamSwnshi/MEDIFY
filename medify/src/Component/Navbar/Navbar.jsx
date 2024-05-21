import React from 'react';
import "./Navbar.css"
import logo from "../assets/icon.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className='wrapper'>
        <img src={logo} alt="logo" className='logoImg'/>
        <div > 
         <ul className='rapper'>
          <li><Link to="/finddoctor">Find Doctor</Link></li>
          <li>Hospital</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <button className='bookingbtn'>My Booking</button>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
