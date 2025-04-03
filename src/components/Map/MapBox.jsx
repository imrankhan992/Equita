import React, { useState } from "react";
import "./mapbox.css";
import { Envelop, Location, Phone } from "../../assets/images/svgs/svgs";

export default function MapBox() {
  const [open, setOpen] = useState(null); // This will store which disclosure is open

  const toggleDisclosure = (index) => {
    setOpen(open === index ? null : index); // Toggle between opening and closing the current disclosure
  };

  return (
    <div className="map_box_main_container">
      <div className="mapbox-container">
        <div className="mapbox-content">
          <button className="box_buttons_location">Geo Locations</button>

          {/* Disclosure for London office */}
          <div className="disclosure" onClick={() => toggleDisclosure(1)}>
            <div className="disclosure-button">
              <span className="disclosure-title">London office</span>
              <span className={`chevron ${open === 1 ? "open" : ""}`}>
                {open === 1 ? "-" : "+"}
              </span>
            </div>
            {open === 1 && (
              <div className="disclosure-panel">
                <ul className="office-list">
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Location /> New York 11226 United States.
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Envelop /> Equita@7oroof.com
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Phone /> (002) 01061245741
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Disclosure for Berlin office */}
          <div className="disclosure" onClick={() => toggleDisclosure(2)}>
            <div className="disclosure-button">
              <span className="disclosure-title">Berlin office</span>
              <span className={`chevron ${open === 2 ? "open" : ""}`}>
                {open === 2 ? "-" : "+"}
              </span>
            </div>
            {open === 2 && (
              <div className="disclosure-panel">
                <ul className="office-list">
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Location /> Berlin 10115 Germany.
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Envelop /> berlin@equita.com
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Phone /> (003) 01561245741
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Disclosure for Manchester office */}
          <div className="disclosure" onClick={() => toggleDisclosure(3)}>
            <div className="disclosure-button">
              <span className="disclosure-title">Manchester office</span>
              <span className={`chevron ${open === 3 ? "open" : ""}`}>
                {open === 3 ? "-" : "+"}
              </span>
            </div>
            {open === 3 && (
              <div className="disclosure-panel">
                <ul className="office-list">
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Location /> Manchester 11226 United Kingdom.
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Envelop /> manchester@equita.com
                    </span>
                  </li>
                  <li className="office-item">
                    <span className="li_texts_with_icons">
                      <Phone /> (004) 01061245741
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
