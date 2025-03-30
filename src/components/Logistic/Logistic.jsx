import React from "react";
import "./logistic.css";
import logistic_img from "../../assets/images/about/1.png";
import signature from "../../assets/images/signature/1.png";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const Logistic = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3  });

  return (
    <section className="spacing-y logistic_section" ref={ref}>
      <div className="container logistic_container">
        <div className="logistic_img">
          <img
            src={logistic_img}
            width={370}
            height={510}
            alt=""
            srcset="Reliable Logistic & Transport Solutions Saves Your Time!"
          />
          <div className="logistic_count">
            <div className="logistic_count_item">
              <svg
                height={65}
                width={65}
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
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <h3 className="count-heading">
                <CountUp
                 key={inView}
                  start={1}
                  end={470}
                  duration={2}
                  className="count-number"
                />
                m
              </h3>

              <span>Delivered Goods</span>
            </div>
          </div>
        </div>

        <div className="logistic_content">
          <span className="logistic_span">
            Providing Full Range Of Transportation Worldwide.
          </span>
          <h1>Reliable Logistic & Transport Solutions Saves Your Time!</h1>

          <div className="logistic_content_grid">
            {/* left */}
            <div>
              <p>
                Equita Group is a representative logistics operator providing
                full range of service in the sphere of customs clearance
                transportation worldwide for any cargo
              </p>
              <p>
                We pride ourselves on providing the best transport and shipping
                services available allover the world. Our skilled personnel,
                utilising the latest communications, tracking and combined with
                experience through integrated supply chain solutions!
              </p>
            </div>
            {/* right */}
            <div className="logistic_content_grid_right">
              <div>
                <h2>Quality</h2>
                <p>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
              <div>
                <h2>rellability</h2>
                <p>
                  We provide with cargo safety throughout all the stages of our
                  delivery process..
                </p>
              </div>
            </div>
          </div>

          {/* signature */}
          <div className="signature-container">
            <div>
              <h3>Michael Dawson</h3>
              <span>CEO Equita Group</span>
            </div>
            <div>
              <img src={signature} alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistic;
