import React from "react";
import "./footer.css";
import {
  FooterHeading,
  FooterDescription,
  FooterCopyright,
  NewsletterDescription,
  NewsletterInput,
  NewsletterButton,
} from "../Branding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Phone } from "../../assets/images/svgs/svgs";

interface Social {
  icon: IconDefinition;
  link: string;
}

interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

interface QuickContact {
  message: string;
  phone: string;
  address: string;
}

interface Newsletter {
  description: string;
  placeholder: string;
  buttonText: string;
}

interface FooterProps {
  logoUrl: string;
  newsletter: Newsletter;
  socials: Social[];
  linkGroups: LinkGroup[];
  quickContact: QuickContact;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  logoUrl,
  newsletter,
  socials,
  linkGroups,
  quickContact,
  copyright,
}) => {
  return (
    <>
      <footer className="footer_section">
        <div className="container main_footer">
          <div className="main_logo">
            <img src={logoUrl} alt="logo" width={145} height={48} />
          </div>
          <div className="col-12 col-lg-9 col-xl-8">
            <div className="widget-content">
              <NewsletterDescription description={newsletter.description} />
              <form className="form-newsletter mailchimp" noValidate>
                <NewsletterInput placeholder={newsletter.placeholder} />
                <NewsletterButton label={newsletter.buttonText} />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer_section footer_section2">
        <div className="container">
          <div className="footer_section2_content">
            {/* About + Socials */}
            <div className="footer_section2_content1">
              <FooterHeading heading="Equita" />
              <FooterDescription description="Equita is a leading independent investment bank in Italy..." />
              <div className="social_icon">
                {socials.map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={social.icon}
                      size="2xl"
                      fill="#fff"
                      className="icon_group"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Groups */}
            {linkGroups.map((group, idx) => (
              <div className="footer_section2_content1" key={idx}>
                <FooterHeading heading={group.title} />
                <ul className="footer_section2_content1_list">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Contact */}
            <div className="footer_section2_content1">
              <FooterHeading heading="Quick Contact" />
              <ul className="footer_section2_content1_list quick_chat">
                <li>
                  <span className="quick_p">{quickContact.message}</span>
                </li>
                <li>
                  <span className="phone">
                    <Phone /> {quickContact.phone}
                  </span>
                </li>
                <li>
                  <span>{quickContact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copy_right">
          <FooterCopyright text={copyright} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
