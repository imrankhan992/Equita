import React from "react";
import "./plan.css";
import NoteSlider from "./NodeSlider";

export interface Testimonial {
  image: string;
  text: string;
  name: string;
  position: string;
  rating: number;
}

export interface PlanProps {
  subtitle: string;
  title: string;
  description: string;
  buttonLabel: string;
  testimonials: Testimonial[];
}

const Plan: React.FC<PlanProps> = ({
  subtitle,
  title,
  description,
  buttonLabel,
  testimonials,
}) => {
  return (
    <section className="section_plan">
      <div className="overlay-red"></div>
      <div className="container plan-index plan_section_main">
        <div className="plan_section_left">
          <p className="heading-subtitle_plan">{subtitle}</p>
          <h2 className="heading_title">
            {title.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <p className="heading-desc">{description}</p>
          <a className="btn--inverse">{buttonLabel}</a>
        </div>

        <NoteSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Plan;
