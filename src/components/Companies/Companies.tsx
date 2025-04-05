import React from "react";
import "./companies.css";
import Cards from "./Cards";
import { faPlaneUp, faShip, faTrailer } from "@fortawesome/free-solid-svg-icons";

const Companies = ({
  subtitle,
  title,
  description,
  contactInfo,
  iconImages,
}: {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    phone: string;
    representative: string;
  };
  iconImages: string[];
}) => {
  return (
    <section className="spacing-y companies container">
      <div className="container companies__container ">
        <div>
          <span className="company-sub-heading">{subtitle}</span>
          <h3 className="company_heading">{title}</h3>
        </div>
        <div>
          <p className="company_paragraph">{description}</p>
          <div className="company__btn__container">
            <button className="company-btn">Pricing and Plans</button>
            <div className="company__contact">
              <img
                height={55}
                width={55}
                src={iconImages[0]}
                alt="profile"
              />
              <div className="company__contact__info">
                <h3>{contactInfo.phone}</h3>
                <span>{contactInfo.representative}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards of companies */}

      <div className="company__cards_container ">
        <Cards icon={faPlaneUp} />
        <Cards icon={faShip} />
        <Cards icon={faTrailer} />
      </div>
      <p className="company_advertise">
        Logistic &amp; Transport Solutions Saves Your Time.{" "}
        <a href="javascript:void(0)">
          {" "}
          Find your solution{" "}
          <svg
            width={20.8}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>{" "}
        </a>
      </p>
    </section>
  );
};

export default Companies;
