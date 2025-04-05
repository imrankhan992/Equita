// components/branding.tsx
import React from "react";

export const Logo = ({
  src,
  alt,
  darkSrc,
  width,
  height,
}: {
  src: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
}) => (
  <>
    <picture className="logo-container">
      <source media="(max-width: 64.938rem)" srcSet={darkSrc} />
      <img src={src} alt={alt} width={width} height={height} />
    </picture>
    <picture className="scroll_container">
      <source media="(max-width: 64.938rem)" srcSet={src} />
      <img src={darkSrc} alt={alt} width={width} height={height} />
    </picture>
  </>
);

export const NavMenu = ({
  navItems,
}: {
  navItems: {
    label: string;
    subItems?: { title?: string; items: string[] }[];
  }[];
}) => (
  <div className="navbar">
    {navItems.map((nav, idx) => (
      <div key={idx} className="dropdown">
        <button className="dropbtn">{nav.label}</button>
        {nav.subItems && (
          <div className="dropdown-content">
            {nav.subItems.length === 1 ? (
              nav.subItems[0].items.map((item, i) => (
                <a key={i} href="#">{item}</a>
              ))
            ) : (
              <div className="even-columns">
                {nav.subItems.map((group, gi) => (
                  <div key={gi}>
                    {group.title && <h2>{group.title}</h2>}
                    {group.items.map((item, ii) => (
                      <a key={ii} href="#">{item}</a>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div className="border-dropdown-content "></div>
          </div>
        )}
      </div>
    ))}
    <a href="#">Contact</a>
  </div>
);

export const LanguageDropdown = ({
  languages,
}: {
  languages: string[];
}) => (
  <div className="dropdown">
    <button className="dropbtn">Eu</button>
    <div className="dropdown-content">
      {languages.map((lang, i) => (
        <a key={i} href="#">{lang}</a>
      ))}
      <div className="border-dropdown-content "></div>
    </div>
  </div>
);


export const ContactButton = ({ label }: { label: string }) => (
    <button className="header-button">{label}</button>
  );




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

export const HeroCard = ({
  icon,
  title,
  subtitle,
  color,
  active,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color?: string;
  active?: boolean;
}) => {
  return (
    <div className={`hero-card-container group ${active ? "active" : ""}`}>
      <div>
        <FontAwesomeIcon
          icon={icon}
          size="4x"
          color={color}
          className={color ? "icon_color" : ""}
        />
      </div>
      <div className="hero-card-text group-hover:text-white">
        <span className="sub_head">{subtitle}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};


// === Logistic Image Section ===
export const LogisticImage = ({
  img,
  alt,
  srcSet,
  countEnd,
  countUnit,
  countText,
  inView,
}: {
  img: string;
  alt: string;
  srcSet: string;
  countEnd: number;
  countUnit: string;
  countText: string;
  inView: boolean;
}) => (
  <div className="logistic_img">
    <img src={img} width={370} height={510} alt={alt} srcSet={srcSet} />
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
);

// === Content Block ===
export const LogisticContent = ({
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
}) => (
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
);



// === Quality Section Headings ===
export const QualityHeadings = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => (
  <div className="quality__content_left">
    <p>{heading}</p>
    <h2>{subheading}</h2>
  </div>
);

// === Quality Description and Advantages List ===
export const QualityDescription = ({
  description,
  advantages,
}: {
  description: string;
  advantages: string[];
}) => (
  <div className="quality__content_right">
    <p>{description}</p>
    <div>
      <ul className="advantages-list">
        {advantages.map((advantage, index) => (
          <li className="check_list" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {advantage}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// === Quality Testimonial Image Block ===
export const TestimonialImage = ({
  image,
  testimonialName,
  isActive,
}: {
  image: string;
  testimonialName: string;
  isActive?: boolean;
}) => (
  <div className={isActive ? "quality__images_right" : "quality__images_left"}>
    <div
      className={`sub_container_images ${
        isActive ? "active-com" : "not_Active"
      }`}
    >
      <svg
        width={60}
        height={60}
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
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
        />
      </svg>
      <h3 className="company_card_h3">{testimonialName}</h3>
      <svg
        width={20.8}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="company__cards__svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
    <img src={image} alt="" width={690} height={460} />
  </div>
);


// === Articles Section Headings ===
export const ArticlesHeadings = ({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) => (
  <div className="articles_container">
    <p className="heading-subtitle">{subtitle}</p>
    <h2 className="heading-title">{title}</h2>
  </div>
);

// === Showcase Section Headings + Description ===
export const ShowcaseHeadings = ({
  subtitle,
  title,
  text,
}: {
  subtitle: string;
  title: string;
  text: string;
}) => (
  <div className="show_case_container container">
    <div className="show_case_head">
      <span className="sub_head_showcase">{subtitle}</span>
      <h2 className="head_showcase">{title}</h2>
    </div>
    <p className="para_showcase">{text}</p>
  </div>
);


// plans
// === Subtitle ===
export const PlanSubtitle = ({ subtitle }: { subtitle: string }) => (
  <p className="heading-subtitle_plan">{subtitle}</p>
);

// === Title (supports line breaks) ===
export const PlanTitle = ({ title }: { title: string }) => (
  <h2 className="heading_title">
    {title.split("\n").map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </h2>
);
// recent articles
// === Description ===
export const PlanDescription = ({ description }: { description: string }) => (
  <p className="heading-desc">{description}</p>
);

// === Button ===
export const PlanButton = ({ label }: { label: string }) => (
  <a className="btn--inverse">{label}</a>
);


// === Subtitle ===
export const RecentArticlesSubtitle = ({ subtitle }: { subtitle: string }) => (
  <p className="heading-subtitle">{subtitle}</p>
);

// === Heading ===
export const RecentArticlesHeading = ({ heading }: { heading: string }) => (
  <h2 className="heading-title">{heading}</h2>
);

// === Description ===
export const RecentArticlesDescription = ({
  description,
}: {
  description: string;
}) => <p className="heading-desc">{description}</p>;


// components/branding.tsx

// === Heading ===
export const FooterHeading = ({ heading }: { heading: string }) => (
  <h3 className="footer-heading">{heading}</h3>
);

// === Subheading / Subtitle ===
export const FooterSubtitle = ({ subtitle }: { subtitle: string }) => (
  <p className="footer-subheading">{subtitle}</p>
);

// === Description ===
export const FooterDescription = ({ description }: { description: string }) => (
  <p className="intro_p">{description}</p>
);

// === Copyright ===
export const FooterCopyright = ({ text }: { text: string }) => (
  <p>{text}</p>
);

// === NewsletterDescription ===
export const NewsletterDescription = ({
  description,
}: {
  description: string;
}) => <p className="heading-desc">{description}</p>;

// === NewsletterInput ===
export const NewsletterInput = ({
  placeholder,
}: {
  placeholder: string;
}) => (
  <input
    className="form-control"
    type="email"
    name="EMAIL"
    placeholder={placeholder}
  />
);

// === NewsletterButton ===
export const NewsletterButton = ({ label }: { label: string }) => (
  <button className="btn btn--primary" type="submit">
    {label}
  </button>
);

// CTA
export const Subtitle = ({ text }: { text: string }) => (
  <p className="heading-subtitle">{text}</p>
);

export const Title = ({ text }: { text: string }) => (
  <h2 className="heading-title_cta">{text}</h2>
);

export const FeatureIcon = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure>
    <img width={70} height={70} src={src} alt={alt} />
    <figcaption className="fig_caption">{caption}</figcaption>
  </figure>
);