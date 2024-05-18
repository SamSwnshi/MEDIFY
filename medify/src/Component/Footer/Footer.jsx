import React from "react";
import "./Footer.css";

import logo from "../assets/icon.png";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-detail">
        <div className="footer-data">
          <div className="image-logo">
            <img src={logo} alt="logo" className="logoImage" />
            <div className="icons-group">
              <FaFacebook />
              <AiFillTwitterCircle />
              <IoLogoYoutube />
              <FaPinterest />
            </div>
          </div>
          <ul className="unorderlist">
            <li>
              <MdArrowForwardIos /> About us
            </li>
            <li>
              <MdArrowForwardIos /> Our Pricing
            </li>
            <li>
              <MdArrowForwardIos /> Our Gallery
            </li>
            <li>
              <MdArrowForwardIos /> Appointment
            </li>
            <li>
              <MdArrowForwardIos /> Privacy Policy
            </li>
          </ul>
          <ul className="unorderlist">
            <li>
              <MdArrowForwardIos /> Orthology
            </li>
            <li>
              <MdArrowForwardIos /> Neurology
            </li>
            <li>
              <MdArrowForwardIos /> Dental Care
            </li>
            <li>
              <MdArrowForwardIos /> Opthalmology
            </li>
            <li>
              <MdArrowForwardIos /> Cardiology
            </li>
          </ul>
          <ul className="unorderlist">
            <li>
              <MdArrowForwardIos /> About us
            </li>
            <li>
              <MdArrowForwardIos /> Our Pricing
            </li>
            <li>
              <MdArrowForwardIos /> Our Gallery
            </li>
            <li>
              <MdArrowForwardIos /> Appointment
            </li>
            <li>
              <MdArrowForwardIos /> Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <p className="text">Copyright ©2024 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
