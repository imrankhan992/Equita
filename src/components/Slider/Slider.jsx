import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import slider2 from "../../assets/images/sliders/slider2.png";
import slider1 from "../../assets/images/sliders/slider1.png";
import "./slider.css";

// import required modules
import { Pagination, Navigation, EffectFade } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container ">
            <img src={slider2} alt="a man checking the construction work" />
            <div className="slider-content container ">
              <span>Flexibile, Improved And accelerated Solutions</span>
              <h1>full sustainable cargo solutions!</h1>
              <p>Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.</p>
             
              <div className="sliders-buttons">
              <button className="button-red">More About Us</button>
              <button className="button-black">Our Services</button>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}