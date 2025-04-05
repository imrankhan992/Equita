import React from "react";
import "./hero.css";
import HeroSlider from "../Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Hero = ({
  cards,
  sliderContent,
}: {
  cards: {
    icon: any;
    title: string;
    subtitle: string;
    color?: string;
    active?: boolean;
  }[];
  sliderContent: Parameters<typeof HeroSlider>[0]["slides"];
}) => {
  return (
    <section className="">
      <div className="hero-container">
        <HeroSlider slides={sliderContent} />
        <div className="container hero-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`hero-card-container group ${
                card.active ? "active" : ""
              }`}
            >
              <div>
                <FontAwesomeIcon
                  icon={card.icon}
                  size="4x"
                  color={card.color}
                  className={card.color ? "icon_color" : ""}
                />
              </div>
              <div className="hero-card-text group-hover:text-white">
                <span className="sub_head">{card.subtitle}</span>
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
