import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = ({icon}) => {
  return (
    <div className="company__cards ">
      <div className="background__icon">
        <FontAwesomeIcon icon={icon}  className="icon_sizes" />
      </div>
      <div className="company__cards__icon">
      <FontAwesomeIcon icon={icon}  className="" size="4x" color="red" />
        <h4 className="company_card_heading">
          air freight <br /> services
        </h4>
      </div>
      <div className="company__cards__content">
        <p>
          We can provide with the comprehensive service in the sphere of urgent,
          valuable, fragile or any cargoes conscientious accelerated delivery by
          air.
        </p>
        <a href="javascript:void(0)" className="company__cards__link">
          <svg
            width={20.8}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className="company__cards__svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          read more
        </a>
      </div>
    </div>
  );
};

export default Cards;
