import React from "react";
import "./hero.css";
import HeroSlider from "../Slider/Slider";
import { HeroCard } from "../Branding";


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
            <HeroCard
              key={index}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              color={card.color}
              active={card.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
