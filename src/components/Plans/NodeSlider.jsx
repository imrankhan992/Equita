import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import './noteslider.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Star } from '../../assets/images/svgs/svgs';


export default function NoteSlider() {
  return (
    <>
     <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  effect="fade"
  navigation={true}
  modules={[Autoplay, Pagination, Navigation,EffectFade]}
  className="note-slider"
>
  <SwiperSlide className="Note_slider_item">
    <div className="note_slider_item">
    <div className="note_slider_item_content">
  <div className="review_profile_container">
    <div className="review_profile">
      <img
        className="image_user"
        width={60}
        height={60}
        src="https://demo.zytheme.com/equita/assets/images/testimonial/3.jpg"
        alt="profile"
      />
    </div>
  </div>
  <div className="review_content">
    <div className="review_star">
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <div>
      <p className="note_slider_p">
        Equita Logistics International customer service is some of the best we have ever had with ocean we like to ship as much as possible with you all.
      </p>
      <div className="testimonial-meta">
        <h4>John R Peter</h4>
        <p>movein</p>
      </div>
    </div>
  </div>
</div>

    </div>
  </SwiperSlide>

  <SwiperSlide className="Note_slider_item">
    <div className="note_slider_item">
      <div className="note_slider_item_content">
        <div className="review_profile_container">
          <div className="review_profile">
            <img
              className="image_user"
              width={60}
              height={60}
              src="https://demo.zytheme.com/equita/assets/images/testimonial/3.jpg"
              alt="profile"
            />
          </div>
        </div>
        <div className="review_content">
          <div className="review_star">
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div>
            <p className="note_slider_p">
              Imran Logistics International customer service is some of the best we have ever had with ocean we like to ship as much as possible with you all.
            </p>
            <div className="testimonial-meta">
              <h4>John R Peter</h4>
              <p>movein</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  {/* Custom Pagination Container */}
  <div className="custom-pagination"></div>
</Swiper>
    </>
  );
}
