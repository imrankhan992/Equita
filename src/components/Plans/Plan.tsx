import React from "react";
import "./plan.css";
import NoteSlider from "./NodeSlider";
import {
  PlanSubtitle,
  PlanTitle,
  PlanDescription,
  PlanButton,
} from "../Branding";

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
          <PlanSubtitle subtitle={subtitle} />
          <PlanTitle title={title} />
          <PlanDescription description={description} />
          <PlanButton label={buttonLabel} />
        </div>

        <NoteSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Plan;
