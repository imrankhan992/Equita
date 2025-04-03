import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo/logo-light.png";
import logo_dark from "../../assets/images/logo/logo-dark.png";

import { Toggle } from "./Toggle";


export const Header = () => {
    // State to track the scroll position
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to monitor scroll event
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false); 
        }
      };
  
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className={`header-secion ${isScrolled ? "scrolled" : "imran"}`}>
      <nav className="nav-container container">
        {/* Logo */}
        <picture className="logo-container">
          <source  media="(max-width: 64.938rem)"  srcset={logo_dark} type="" />
          <img src={logo} alt="Logo" width={120} height={39} />
        </picture>
        <picture className="scroll_container">
          <source  media="(max-width: 64.938rem)"  srcset={logo} type="" />
          <img src={logo_dark} alt="Logo" width={120} height={39} />
        </picture>

        {/* Right Side Menu */}
        <div className="menu-container">
          <div className="navbar">
            <a href="#home" className="scrolled_text">Home</a>
            <a href="#news" className="scrolled_text">News</a>

            <div className="dropdown">
              <button className="dropbtn">Company</button>
              <div className="dropdown-content">
                <a href="#" >About Us</a>
                <a href="#" >Careers</a>
                <a href="#" >Our Team</a>
                <div className="border-dropdown-content " ></div>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                <div className="even-columns">
                  <div> 
                    <h2>transport services</h2>
                    <a href="#">Web Development</a>
                <a href="#">App Development</a>
                <a href="#">Marketing</a></div>
                  <div><h2>industry solutions</h2> <a href="#">Web Development</a>
                <a href="#">App Development</a>
                <a href="#">Marketing</a></div>
                </div>
                <div className="border-dropdown-content " ></div>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">News & Media</button>
              <div className="dropdown-content">
                <a href="#">Latest Updates</a>
                <a href="#">Press Releases</a>
                <a href="#">Blog</a>
                <div className="border-dropdown-content " ></div>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">Features</button>
              <div className="dropdown-content">
                <a href="#">Premium Features</a>
                <a href="#">Integrations</a>
                <a href="#">API</a>
                <div className="border-dropdown-content " ></div>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">Contact</button>
              <div className="dropdown-content">
                <a href="#">Support</a>
                <a href="#">FAQs</a>
                <a href="#">Feedback</a>
                <div className="border-dropdown-content " ></div>
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="end-buttons">
            {/* Search Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={18}
                width={18}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                color="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            {/* Buttons */}
            <button className="header-button">Request a Quote</button>
            <button>Eu</button>
          </div>
        </div>
        {/* mobile view */}
      <Toggle/>
      </nav>
    </header>
  );
};
