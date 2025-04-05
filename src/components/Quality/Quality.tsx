import React from "react";
import "./quality.css";
import {
  QualityHeadings,
  QualityDescription,
  TestimonialImage,
} from "../Branding";

const Quality = ({
  heading,
  subheading,
  description,
  advantages,
  testimonialNameLeft,
  testimonialNameRight,
  imageLeft,
  imageRight,
}: {
  heading: string;
  subheading: string;
  description: string;
  advantages: string[];
  testimonialNameLeft: string;
  testimonialNameRight: string;
  imageLeft: string;
  imageRight: string;
}) => {
  return (
    <section className="quality__section">
      <div className="container quality_main">
        <div className="quality__container">
          <QualityHeadings heading={heading} subheading={subheading} />
          <QualityDescription description={description} advantages={advantages} />
        </div>

        <div className="quality__images">
          <TestimonialImage
            image={imageLeft}
            testimonialName={testimonialNameLeft}
          />
          <TestimonialImage
            image={imageRight}
            testimonialName={testimonialNameRight}
            isActive
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
