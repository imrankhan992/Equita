import React, { useState } from "react";
import "./toggle.css";
import Home from "./MenuItem";

export const Toggle = ({
  menuItems,
}: {
  menuItems: {
    label: string;
    sections: { title?: string; links: string[] }[];
  }[];
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mobile-menu">
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isChecked}
          className="burger-checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span />
        <span />
        <span />
      </label>
      <div className={`mobile-menu-section ${isChecked ? "open" : ""}`}>
        <Home menuItems={menuItems} />
      </div>
    </div>
  );
};
