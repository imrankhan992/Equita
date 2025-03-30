import React from "react";

import "./hero.css";
import HeroSlider from "../Slider/Slider";

const Hero = () => {
  return (
    <section className="">
      <div className=" hero-container ">
        <HeroSlider />
       <div className="container  hero-cards ">
      

<div className="hero-card-container group active">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 transition-all duration-300 group-hover:stroke-white acive-svg"
      width={58}
      height={58}
      color="red"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span>Sustainable</span>
    <h3>Warehousing Services</h3>
  </div>
</div>

<div className="hero-card-container group">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 transition-all duration-300 group-hover:stroke-white"
      width={58}
      height={58}
      color="red"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span>Sustainable</span>
    <h3>Warehousing Services</h3>
  </div>
</div>
<div className="hero-card-container group">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 transition-all duration-300 group-hover:stroke-white"
      width={58}
      height={58}
      color="red"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span>Sustainable</span>
    <h3>Warehousing Services</h3>
  </div>
</div>


<div className="hero-card-container group">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 transition-all duration-300 group-hover:stroke-white"
      width={58}
      height={58}
      color="red"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span>Sustainable</span>
    <h3>Warehousing Services</h3>
  </div>
</div>


       </div>
      </div>
    </section>
  );
};

export default Hero;
