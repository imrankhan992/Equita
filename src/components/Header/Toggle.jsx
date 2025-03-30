import React, { useState } from "react";
import "./toggle.css";
import Home from "./MenuItem"; // Your MenuItem component

export const Toggle = () => {
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

      {/* Animated menu container */}
      <div className={`mobile-menu-section ${isChecked ? "open" : ""}`}>
        <Home />
      </div>
    </div>
  );
};
