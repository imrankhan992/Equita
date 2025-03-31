import React from "react";
import "./cta.css";
import payment_terminal_icon from "../../assets/images/icons/credit-card-machine.png";
import package_icon from "../../assets/images/icons/package.png";
import scale_machine_icon from "../../assets/images/icons/weighing-machine.png";
import Cta_Tabs from "./CtaTabs";
import Companies from "../Companies/Companies";
const Cta = () => {
  return (
    <section className="cta spacing-y">
      <div className="cta__container container">
        <div className="cta__content">
          <div className="cta__content-left">
            <p class="heading-subtitle">
              Dedicated Customer Teams &amp; An Agile Services
            </p>
            <h2 class="heading-title">
              Global Logistics Partner To World’s Famous Brands For Over 25
              Years!
            </h2>
          </div>
          {/* right */}
          <div className="cta__content-right">
            <div>
              <figure>
                <img
                  width={70}
                  height={70}
                  src={payment_terminal_icon}
                  alt="payment icon"
                />
                <figcaption>transparent pricing</figcaption>
              </figure>
            </div>

            <figure>
              <img
                width={70}
                height={70}
                src={package_icon}
                alt="this is box package icon"
              />
              <figcaption>fast, effecient delivery</figcaption>
            </figure>
            <figure>
              <img
                width={70}
                height={70}
                src={scale_machine_icon}
                alt="weighing-machine.png"
              />
              <figcaption>warehouse storage</figcaption>
            </figure>
          </div>
        </div>
        <Cta_Tabs/>
        <Companies/>
      </div>
    </section>
  );
};

export default Cta;
