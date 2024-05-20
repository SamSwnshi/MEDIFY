import React from "react";
import "./Faq.css";
import faq from "../assets/faq.png";
import { IoMdAdd } from "react-icons/io";
const Faq = () => {
  return (
    <div className="faq-wrapper">
      <h4 className="heading-title">Get Your Answer</h4>
      <p className="subheading-para">Frequenlty Asked Questions</p>
      <div className="faq-box">
        <img src={faq} alt="faq" className="faq-img" />
        <div>
          <div className="carosole">
            <p>
              Why choose our medical for your family? 
            </p>
            <IoMdAdd className="icons"/>
          </div>
          <div className="carosole">
            <p>
              Why choose our medical for your family? 
            </p>
            <IoMdAdd className="icons" />
          </div>
          <div className="carosole">
            <p>
              Why choose our medical for your family? 
            </p>
            <IoMdAdd className="icons"/>
          </div>
          <div className="carosole">
            <p>
              Why choose our medical for your family? 
            </p>
            <IoMdAdd className="icons" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Faq;
