import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo6 from "../../assets/images/clients/6.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./showcase.css";

// Import required modules
import { Autoplay, FreeMode } from "swiper/modules";

export default function ShowCaseSlider() {
  return (
    <>
    <Swiper
  spaceBetween={30}
  freeMode={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: { slidesPerView: 1 }, // Mobile
    480: { slidesPerView: 2 }, // Small tablets
    768: { slidesPerView: 3 }, // Tablets
    1024: { slidesPerView: 4 }, // Laptops and desktops
    1440: { slidesPerView: 5 }, // Large screens
  }}
  modules={[Autoplay, FreeMode]}
  className="container swiper-dev"
>
        <SwiperSlide className="show_Case_slider_item">
          <img src={logo6} alt="Logo" className="small-image" />
        </SwiperSlide>
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/5.png"} alt="Logo" className="small-image" />
        </SwiperSlide>
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/1.png"} alt="Logo" className="small-image" />
        </SwiperSlide>
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/4.png"} alt="Logo" className="small-image" />
        </SwiperSlide>{" "}
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/2.png"} alt="Logo" className="small-image" />
        </SwiperSlide>
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/2.png"} alt="Logo" className="small-image" />
        </SwiperSlide>
        <SwiperSlide className="show_Case_slider_item">
          <img src={"https://demo.zytheme.com/equita/assets/images/clients/2.png"} alt="Logo" className="small-image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
