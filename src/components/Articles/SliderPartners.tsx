import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./articles_sliders.css";
import { Autoplay, FreeMode } from "swiper/modules";

export default function PartnetsSliders({
  items,
}: {
  items: {
    image: string;
    title: string;
    category: string;
    description: string;
  }[];
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
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay, FreeMode]}
      className="imran"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="show_Case_slider_item_container">
          <div className="slider_container">
            <div className="img_dev">
              <img
                className="slider_image"
                width={350}
                height={193}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="case-content">
              <div className="case-title">
                <h4>{item.title}</h4>
                <div className="case-cat">{item.category}</div>
              </div>
              <div className="case-desc">
                <p>{item.description}</p>
              </div>
              <div className="case-more">
                <svg
                  height={25}
                  width={25}
                  className="svg-arrow-more"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  color="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
                explore case study
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
