import React from "react";
import "./plan.css";
import NoteSlider from "./NodeSlider";
const Plan = () => {
  return (
    <section className="section_plan">
      <div className="overlay-red"></div>
      <div className="container plan-index plan_section_main">
        <div className="plan_section_left">
          <p className="heading-subtitle_plan">what our clients say!</p>
          <h2 className="heading_title">
            Individually Assess <br />
            Each Plan And Offer <br />
            Optimal Solutions!
          </h2>
          <p className="heading-desc">
            Serving an impressive list of long-term clients with experience and
            expertise in multiple industries.
          </p>
          <a
            className="btn--inverse"
           
          >
            our services
          </a>
        </div>
        {/* right dev */}
       
            <NoteSlider/>
       
      </div>
    </section>
  );
};

export default Plan;
