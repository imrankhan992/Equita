import React, { useEffect, useRef, useState } from "react";
import "./cta.css";
import payment_terminal_icon from "../../assets/images/icons/credit-card-machine.png";
import package_icon from "../../assets/images/icons/package.png";
import scale_machine_icon from "../../assets/images/icons/weighing-machine.png";
import Cta_Tabs from "./CtaTabs";
import Companies from "../Companies/Companies";

const Cta = () => {
  const ctaRef = useRef(null);
  const [ctaHeight, setCtaHeight] = useState(0);

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

  return (
    <section className="cta__section_main_container">
      <div ref={ctaRef} className="cta__container cta spacing-y">
        <div className="cta__content container">
          <div className="cta__content-left">
            <p className="heading-subtitle">
              Dedicated Customer Teams &amp; An Agile Services
            </p>
            <h2 className="heading-title">
              Global Logistics Partner To World’s Famous Brands For Over 25
              Years!
            </h2>
          </div>
          {/* Right */}
          <div className="cta__content-right">
            <div>
              <figure>
                <img
                  width={70}
                  height={70}
                  src={payment_terminal_icon}
                  alt="payment icon"
                />
                <figcaption>Transparent Pricing</figcaption>
              </figure>
            </div>
            <figure>
              <img
                width={70}
                height={70}
                src={package_icon}
                alt="This is box package icon"
              />
              <figcaption>Fast, Efficient Delivery</figcaption>
            </figure>
            <figure>
              <img
                width={70}
                height={70}
                src={scale_machine_icon}
                alt="Weighing-machine.png"
              />
              <figcaption>Warehouse Storage</figcaption>
            </figure>
          </div>
        </div>
        <Cta_Tabs />
      </div>

      {/* Passing dynamic height to Companies */}
      <Companies style={{ paddingTop: `${ctaHeight}px` }} />
    </section>
  );
};

export default Cta;
