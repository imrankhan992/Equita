import React from "react";
import "./articles.css";
import ShowCaseSlider from "./ShowCaseSlider";
import PartnetsSliders from "./SliderPartners";

const Articles = ({
  subtitle,
  title,
  showcaseSubtitle,
  showcaseTitle,
  showcaseText,
  sliderItems,
  partnerLogos,
}: {
  subtitle: string;
  title: string;
  showcaseSubtitle: string;
  showcaseTitle: string;
  showcaseText: string;
  sliderItems: {
    image: string;
    title: string;
    category: string;
    description: string;
  }[];
  partnerLogos: string[];
}) => {
  return (
    <div className="container articles_section">
      <div className="articles_main">
        <div className="articles_container">
          <p className="heading-subtitle">{subtitle}</p>
          <h2 className="heading-title">{title}</h2>
        </div>
        <div className="slider_aricles container">
          <PartnetsSliders items={sliderItems} />
        </div>
        <div>
          <div className="show_case_container container">
            <div className="show_case_head">
              <span className="sub_head_showcase">{showcaseSubtitle}</span>
              <h2 className="head_showcase">{showcaseTitle}</h2>
            </div>
            <p className="para_showcase">{showcaseText}</p>
          </div>
          <div className="container show_case_slider_spacing">
            <ShowCaseSlider logos={partnerLogos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
