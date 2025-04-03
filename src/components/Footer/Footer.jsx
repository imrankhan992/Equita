import React from "react";
import "./footer.css";
import { Phone } from "../../assets/images/svgs/svgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer_section">
        <div className="container main_footer">
          <div className="main_logo">
            <img
              width={145}
              height={48}
              src="https://demo.zytheme.com/equita/assets/images/logo/logo-light.png"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-9 col-xl-8">
            <div className="widget-content">
              <p>
                Sign up for industry alerts,
                <br />
                insights from Equita.
              </p>
              <form className="form-newsletter mailchimp" noValidate="true">
                <input
                  className="form-control"
                  type="email"
                  name="EMAIL"
                  placeholder="Your Email Address"
                />
                <button className="btn btn--primary" type="submit">
                  sign up!
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      {/* seconday footer */}
      <footer className="footer_section footer_section2">
        <div className="container ">
          <div className="footer_section2_content">
            <div className="footer_section2_content1">
              <h3 className="footer-heading">Equita</h3>
              <p className="intro_p">
                Equita is a leading independent investment bank in Italy,
                providing a full range of investment banking, asset management
                and brokerage services.
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
            <div className="footer_section2_content1">
              <h3 className="footer-heading">services</h3>
              <ul className="footer_section2_content1_list">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer_section2_content1">
              <h3 className="footer-heading">industries</h3>
              <ul className="footer_section2_content1_list">
                <li>
                  <a href="#">Investment Banking</a>
                </li>
                <li>
                  <a href="#">Asset Management</a>
                </li>
                <li>
                  <a href="#">Brokerage Services</a>
                </li>
                <li>
                  <a href="#">Research Services</a>
                </li>
              </ul>
            </div>
            <div className="footer_section2_content1">
              <h3 className="footer-heading">Quick Contact</h3>
              <ul className="footer_section2_content1_list quick_chat">
                <li>
                  <a href="#" className="quick_p">
                    If you have any questions or need help, feel free to contact
                    with our team.
                  </a>
                </li>
                <li>
                  <a href="#" className="phone">
                    {" "}
                    <Phone /> 01061245741{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container copy_right">
          <p>
            © Equita, With Love by <span>Zytheme.com</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
