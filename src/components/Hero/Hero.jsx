import React from "react";

import "./hero.css";
import HeroSlider from "../Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse,faPlaneUp,faShip ,faTrailer} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="">
      <div className=" hero-container ">
        <HeroSlider />
       <div className="container  hero-cards ">
      

<div className="hero-card-container group active">
  <div>
  <FontAwesomeIcon icon={faWarehouse} size="4x" />
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span className="sub_head">Sustainable</span>
    <h3>Warehousing Services</h3>
  </div>
</div>

<div className="hero-card-container group">
  <div>
  <FontAwesomeIcon icon={faPlaneUp} size="4x" color="red"  className="icon_color"/>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span className="sub_head">Sustainable</span>
    <h3>Air Frieght Service</h3>
  </div>
</div>
<div className="hero-card-container group">
  <div>
  <FontAwesomeIcon icon={faShip} size="4x" color="red"  className="icon_color"/>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span className="sub_head">Sustainable</span>
    <h3>Ocean Frieght Service</h3>
  </div>
</div>


<div className="hero-card-container group">
  <div>
  <FontAwesomeIcon icon={faTrailer} size="4x" color="red"  className="icon_color"/>
  </div>
  <div className="hero-card-text group-hover:text-white">
    <span className="sub_head">Sustainable</span>
    <h3>Road Frieght Service</h3>
  </div>
</div>


       </div>
      </div>
    </section>
  );
};

export default Hero;
