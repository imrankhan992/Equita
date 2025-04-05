import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import './noteslider.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Star } from '../../assets/images/svgs/svgs';
import { Testimonial } from './Plan';

interface NoteSliderProps {
  testimonials: Testimonial[];
}

const NoteSlider: React.FC<NoteSliderProps> = ({ testimonials }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="fade"
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="note-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="Note_slider_item">
          <div className="note_slider_item">
            <div className="note_slider_item_content">
              <div className="review_profile_container">
                <div className="review_profile">
                  <img
                    className="image_user"
                    width={60}
                    height={60}
                    src={testimonial.image}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="review_content">
                <div className="review_star">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div>
                  <p className="note_slider_p">{testimonial.text}</p>
                  <div className="testimonial-meta">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="custom-pagination"></div>
    </Swiper>
  );
};

export default NoteSlider;
