import React from "react";
import "./articles.css";
import ShowCaseSlider from "./ShowCaseSlider";
import PartnetsSliders from "./SliderPartners";
import { ArticlesHeadings, ShowcaseHeadings } from "../Branding";

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
        <ArticlesHeadings subtitle={subtitle} title={title} />

        <div className="slider_aricles container">
          <PartnetsSliders items={sliderItems} />
        </div>

        <div>
          <ShowcaseHeadings
            subtitle={showcaseSubtitle}
            title={showcaseTitle}
            text={showcaseText}
          />
          <div className="container show_case_slider_spacing">
            <ShowCaseSlider logos={partnerLogos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
