import React from "react";
import "./logistic.css";
import { useInView } from "react-intersection-observer";
import { LogisticImage, LogisticContent } from "../Branding";

const Logistic = ({
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
  signatureImg,
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
}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="spacing-y logistic_section" ref={ref}>
      <div className="container logistic_container">
        <LogisticImage
          img={logisticImg}
          alt={logisticImgAlt}
          srcSet={logisticImgSrcSet}
          countEnd={countEnd}
          countUnit={countUnit}
          countText={countText}
          inView={inView}
        />

        <LogisticContent
          sectionTitle={sectionTitle}
          sectionHeading={sectionHeading}
          leftParagraph1={leftParagraph1}
          leftParagraph2={leftParagraph2}
          qualityHeading={qualityHeading}
          qualityText={qualityText}
          reliabilityHeading={reliabilityHeading}
          reliabilityText={reliabilityText}
          signatureName={signatureName}
          signatureDesignation={signatureDesignation}
          signatureImg={signatureImg}
        />
      </div>
    </section>
  );
};

export default Logistic;
