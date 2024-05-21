import React from "react";
import "./Medical.css";
import { Swiper, SwiperSlide } from "swiper/react";
import dr1 from "../assets/dr1.png";
import dr2 from "../assets/dr2.png";
import dr3 from "../assets/dr3.png";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css/pagination";
const Medical = () => {
  return (
    <div className="medical-wrapper">
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="medical-tabs">
            <img src={dr1} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Ahmad Khan</h2>
            <p className="position">Neurologist</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="medical-tabs" >
            <img src={dr2} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Heena Sachdeva</h2>
            <p className="position">Orthopadics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="medical-tabs">
            <img src={dr3} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Ankur Sharma</h2>
            <p className="position">Medicine</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="medical-tabs">
            <img src={dr1} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Ahmad Khan</h2>
            <p className="position">Neurologist</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="medical-tabs" >
            <img src={dr2} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Heena Sachdeva</h2>
            <p className="position">Orthopadics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="medical-tabs">
            <img src={dr3} alt="offer" className="medical-image" />
            <h2 className="name">Dr. Ankur Sharma</h2>
            <p className="position">Medicine</p>
          </div>
        </SwiperSlide>

        
        

        <br />
      </Swiper>
    </div>
  );
};

export default Medical;
