import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./slider.css";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

export default function HeroSlider({
  slides,
}: {
  slides: {
    image: string;
    span: string;
    heading: string;
    paragraph: string;
    redButton: string;
    blackButton: string;
  }[];
}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-container">
              <img src={slide.image} alt="a man checking the construction work" />
              <div className="slider-content container">
                <span>{slide.span}</span>
                <h1>{slide.heading}</h1>
                <p>{slide.paragraph}</p>
                <div className="sliders-buttons">
                  <button className="button-red">{slide.redButton}</button>
                  <button className="button-black">{slide.blackButton}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination-custom custom-pagination"></div>
    </>
  );
}
