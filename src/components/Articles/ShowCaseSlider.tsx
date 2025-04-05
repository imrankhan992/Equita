import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./showcase.css";
import { Autoplay, FreeMode } from "swiper/modules";

export default function ShowCaseSlider({
  logos,
}: {
  logos: string[];
}) {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1440: { slidesPerView: 5 },
      }}
      modules={[Autoplay, FreeMode]}
      className="container swiper-dev"
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index} className="show_Case_slider_item">
          <img src={logo} alt={`Logo ${index}`} className="small-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
