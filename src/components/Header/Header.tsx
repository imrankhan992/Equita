import React, { useEffect, useState } from "react";
import "./header.css";
import { Toggle } from "./Toggle";

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
        <picture className="logo-container">
          <source media="(max-width: 64.938rem)" srcSet={logoDark} />
          <img src={logo} alt="Logo" width={120} height={39} />
        </picture>
        <picture className="scroll_container">
          <source media="(max-width: 64.938rem)" srcSet={logo} />
          <img src={logoDark} alt="Logo" width={120} height={39} />
        </picture>

        <div className="menu-container">
          <div className="navbar">
            {navItems.map((nav, idx) => (
              <div key={idx} className="dropdown">
                <button className="dropbtn">{nav.label}</button>
                {nav.subItems && (
                  <div className="dropdown-content">
                    {nav.subItems.length === 1 ? (
                      nav.subItems[0].items.map((item, i) => <a key={i} href="#">{item}</a>)
                    ) : (
                      <div className="even-columns">
                        {nav.subItems.map((group, gi) => (
                          <div key={gi}>
                            {group.title && <h2>{group.title}</h2>}
                            {group.items.map((item, ii) => <a key={ii} href="#">{item}</a>)}
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

          <div className="end-buttons">
            <div>{searchIconSVG}</div>
            <button className="header-button">{contactButton}</button>
            <div className="dropdown">
              <button className="dropbtn">Eu</button>
              <div className="dropdown-content">
                {languages.map((lang, i) => (
                  <a key={i} href="#">{lang}</a>
                ))}
                <div className="border-dropdown-content "></div>
              </div>
            </div>
          </div>
        </div>

        <Toggle menuItems={menuItems}/>
      </nav>
    </header>
  );
};
