import React from "react";
import "./Offer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/offer1.png";
import image2 from "../assets/offer2.png";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
const Offers = () => {
  return (
    <div className="offers-wrapper">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
      >
        <SwiperSlide>
          <img src={image1} alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="offer" />
        </SwiperSlide>
       
        <br />
      </Swiper>
    </div>
  );
};

export default Offers;
