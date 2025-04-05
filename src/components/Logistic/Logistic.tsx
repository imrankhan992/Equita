import React from "react";
import "./logistic.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Logistic = (
  {
    logisticImg,
    logisticImgAlt,
    logisticImgSrcSet,
    countEnd,
    countUnit,
    countText,
    sectionTitle,
    sectionHeading,
    leftParagraph1,
    leftParagraph2,
    qualityHeading,
    qualityText,
    reliabilityHeading,
    reliabilityText,
    signatureName,
    signatureDesignation,
    signatureImg
  }: {
    logisticImg: string;
    logisticImgAlt: string;
    logisticImgSrcSet: string;
    countEnd: number;
    countUnit: string;
    countText: string;
    sectionTitle: string;
    sectionHeading: string;
    leftParagraph1: string;
    leftParagraph2: string;
    qualityHeading: string;
    qualityText: string;
    reliabilityHeading: string;
    reliabilityText: string;
    signatureName: string;
    signatureDesignation: string;
    signatureImg: string;
  }
) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="spacing-y logistic_section" ref={ref}>
      <div className="container logistic_container">
        <div className="logistic_img">
          <img
            src={logisticImg}
            width={370}
            height={510}
            alt={logisticImgAlt}
            srcSet={logisticImgSrcSet}
          />
          <div className="logistic_count">
            <div className="logistic_count_item">
              <svg
                height={65}
                width={65}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <h3 className="count-heading">
                <CountUp
                  key={inView.toString()}
                  start={1}
                  end={countEnd}
                  duration={2}
                  className="count-number"
                />
                {countUnit}
              </h3>
              <span>{countText}</span>
            </div>
          </div>
        </div>

        <div className="logistic_content">
          <span className="logistic_span">{sectionTitle}</span>
          <h1>{sectionHeading}</h1>

          <div className="logistic_content_grid">
            <div>
              <p>{leftParagraph1}</p>
              <p>{leftParagraph2}</p>
            </div>
            <div className="logistic_content_grid_right">
              <div>
                <h2>{qualityHeading}</h2>
                <p>{qualityText}</p>
              </div>
              <div>
                <h2>{reliabilityHeading}</h2>
                <p>{reliabilityText}</p>
              </div>
            </div>
          </div>

          <div className="signature-container">
            <div>
              <h3>{signatureName}</h3>
              <span>{signatureDesignation}</span>
            </div>
            <div>
              <img src={signatureImg} alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistic;
