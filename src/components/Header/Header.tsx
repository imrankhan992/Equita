import React, { useEffect, useState } from "react";
import "./header.css";
import { Toggle } from "./Toggle";
import { ContactButton, LanguageDropdown, Logo, NavMenu } from "../Branding";

export const Header = ({
  logo,
  logoDark,
  navItems,
  contactButton,
  languages,
  searchIconSVG,
  menuItems, // ⬅️ add this
}: {
  logo: string;
  logoDark: string;
  navItems: {
    label: string;
    subItems?: { title?: string; items: string[] }[];
  }[];
  contactButton: string;
  languages: string[];
  searchIconSVG: JSX.Element;
  menuItems: {
    label: string;
    sections: { title?: string; links: string[] }[];
  }[]; // ⬅️ define the type here too
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-secion ${isScrolled ? "scrolled" : "imran"}`}>
      <nav className="nav-container container">
      <Logo src={logo} darkSrc={logoDark} alt="Logo" width={120} height={39} />

        <div className="menu-container">
        <NavMenu navItems={navItems} />

          <div className="end-buttons">
            <div>{searchIconSVG}</div>
            <ContactButton label={contactButton} />
            <LanguageDropdown languages={languages} />
          </div>
        </div>

        <Toggle menuItems={menuItems}/>
      </nav>
    </header>
  );
};
