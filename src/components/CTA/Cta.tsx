import React, { useEffect, useRef, useState } from "react";
import "./cta.css";

import Cta_Tabs from "./CtaTabs";
import shipping from "../../assets/images/icons/shipping.png";
import order from "../../assets/images/icons/order.png";
import { Input } from "./Input";
import Companies from "../Companies/Companies";
import { FeatureIcon, Subtitle, Title } from "../Branding";

const Cta = ({
  subtitle,
  title,
  icons,
}: {
  subtitle: string;
  title: string;
  icons: {
    paymentTerminal: string;
    package: string;
    scaleMachine: string;
  };
}) => {
  const ctaRef = useRef(null);
  const [ctaHeight, setCtaHeight] = useState(0);
  const iconImages = [
    "https://demo.zytheme.com/equita/assets/images/testimonial/5.jpg", // This will be used as the contact image
  ];
  useEffect(() => {
    if (ctaRef.current) {
      setCtaHeight(ctaRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (ctaRef.current) {
        setCtaHeight(ctaRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Fix: Declare the categories array properly
  const categories = [
    {
      name: "Request A Quote",
      img: order,
      alt: "order image",
      content: "Request a quote content here.",
      component: (
        <div className="request_quote-main_container">
          <div className="left_side_main">
            <div>
              <h2 className="sub-headings">Personal Data</h2>
              <div className="request_quote_inputs">
                <Input
                  type="text"
                  placeholder="Name"
                  className="text-input mobile-inputs"
                />
                <Input type="text" placeholder="Email" className="text-input" />
                <Input type="text" placeholder="Phone" className="text-input" />
              </div>
            </div>
            <div>
              <h2 className="sub-headings">Shipment Data</h2>
              <div className="request_quote_inputs">
                <Input
                  type="text"
                  placeholder="Freight Type"
                  className="text-input mobile-inputs"
                />
                <Input
                  type="text"
                  placeholder="City of Departure"
                  className="text-input"
                />
                <Input
                  type="text"
                  placeholder="Delivery City"
                  className="text-input"
                />
              </div>
              <div className="request_quote_small_inputs">
                <Input
                  type="text"
                  placeholder="Incoterms"
                  className="text-input small-mediun-input mobile-inputs"
                />
                <div className="small_input_group">
                  <Input
                    type="text"
                    placeholder="Weight"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Height"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Width"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Length"
                    className="text-input-very-small"
                  />
                </div>
              </div>

              <div className="checkboxes">
                <label className="checkbox_container">
                  fragile
                  <input type="radio" defaultChecked name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  express delivery
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  insurance
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  packaging
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>

              <button className="button-black-to-red">Request A Quote</button>
            </div>
          </div>

          <div className="right_side_main">
            <div className="career_div">
              <div className="overlay-red"></div>
              <div className="career_div_content">
                <h2 className="sub-headings">Take your career to next level</h2>
                <p>
                  We pride ourselves on providing the best transport & shipping
                  services available all over the world and there is no one
                  comes close to us.
                </p>
                <button className="cta-button">
                  <span>
                    <svg
                      height={25}
                      width={25}
                      className="svg-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Track & Trace",
      img: shipping,
      alt: "shipping image",
      content: "Track & Trace details here.",
      component: (
        <div className="request_quote-main_container">
          <div className="left_side_main">
            <div>
              <h2 className="sub-headings">Personal Data</h2>
              <div className="request_quote_inputs-shipping">
                <Input
                  type="text"
                  placeholder="Name"
                  className="text-input-shiping"
                />
              </div>
            </div>
            <div>
              <h2 className="sub-headings">Tracking number</h2>
              <div className="text-area">
                <textarea
                  placeholder="You can enter up to a maximum of airway bill numbers for tracking"
                  className="text-area-input"
                />
              </div>

              <div className="checkboxes">
                <label className="checkbox_container">
                  fragile
                  <input type="radio" defaultChecked name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  express delivery
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  insurance
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox_container">
                  packaging
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>

              <button className="button-black-to-red">Track & Trace</button>
            </div>
          </div>

          <div className="right_side_main">
            <div className="career_div">
              <div className="overlay-red"></div>
              <div className="career_div_content">
                <h2 className="sub-headings">Take your career to next level</h2>
                <p>
                  We pride ourselves on providing the best transport & shipping
                  services available all over the world and there is no one
                  comes close to us.
                </p>
                <button className="cta-button">
                  <span>
                    <svg
                      height={25}
                      width={25}
                      className="svg-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="cta__section_main_container">
      <div ref={ctaRef} className="cta__container cta spacing-y">
        <div className="cta__content container">
          <div className="cta__content-left">
          <Subtitle text={subtitle} />
          <Title text={title} />
          </div>
          <div className="cta__content-right">
          <FeatureIcon
    src={icons.paymentTerminal}
    alt="payment icon"
    caption="Transparent Pricing"
  />
  <FeatureIcon
    src={icons.package}
    alt="box package icon"
    caption="Fast, Efficient Delivery"
  />
  <FeatureIcon
    src={icons.scaleMachine}
    alt="Weighing machine"
    caption="Warehouse Storage"
  />
          </div>
        </div>

        <Cta_Tabs categories={categories} />
      </div>

      {/* Optional: You can use ctaHeight if needed for spacing */}

      <Companies
        subtitle="Top Rated Logistics"
        title="Trusted Transport Companies"
        description="We collaborate with leading logistic companies that offer fast and reliable delivery options by air, sea, and land."
        contactInfo={{
          phone: "+1 (800) 123-4567",
          representative: "John Doe, Support Manager",
        }}
        iconImages={iconImages}
        style={{ paddingTop: `${ctaHeight}px` }}
      />
    </section>
  );
};

export default Cta;
