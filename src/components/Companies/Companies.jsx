import React from "react";
import "./companies.css";
import Cards from "./Cards";
const Companies = () => {
  return (
    <section className="spacing-y companies container">
      <div className="container companies__container ">
        <div>
          <span className="company-sub-heading">
            Safe & Reliable Cargo Solutions!
          </span>
          <h3 className="company_heading">
            Managing Logistics For World’s Multinational Companies.
          </h3>
        </div>
        <div>
          <p className="company_paragraph">
            Our global logistics expertise, advanced supply chain technology &
            customized logistics solutions will help you analyze, develop and
            implement successful supply chain management strategies from
            end-to-end.
          </p>
          <div className="company__btn__container">
            <button className="company-btn">Pricing and Plans</button>
            <div className="company__contact">
              <img
                height={55}
                width={55}
                src="https://demo.zytheme.com/equita/assets/images/testimonial/5.jpg"
                alt="profile"
              />
              <div className="company__contact__info">
                <h3>(002) 01061245741</h3>
                <span>Sales Representative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards of comapnies */}

      <div className="company__cards_container ">
        <Cards />
        <Cards />
        <Cards />
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
            class="size-6"
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
