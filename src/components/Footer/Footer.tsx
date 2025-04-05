import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Phone } from "../../assets/images/svgs/svgs";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
              <p>{newsletter.description}</p>
              <form className="form-newsletter mailchimp" noValidate>
                <input
                  className="form-control"
                  type="email"
                  name="EMAIL"
                  placeholder={newsletter.placeholder}
                />
                <button className="btn btn--primary" type="submit">
                  {newsletter.buttonText}
                </button>
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
              <h3 className="footer-heading">Equita</h3>
              <p className="intro_p">
                Equita is a leading independent investment bank in Italy...
              </p>
              <div className="social_icon">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2xl"
                  fill="#fff"
                  className="icon_group"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2xl"
                  fill="#fff"
                  className="icon_group"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2xl"
                  fill="#fff"
                  className="icon_group"
                />
              </div>
            </div>

            {/* Link Groups */}
            {linkGroups.map((group, idx) => (
              <div className="footer_section2_content1" key={idx}>
                <h3 className="footer-heading">{group.title}</h3>
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
              <h3 className="footer-heading">Quick Contact</h3>
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
          <p>{copyright}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
