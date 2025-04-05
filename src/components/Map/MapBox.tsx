import React, { useState } from "react";
import "./mapbox.css";
import { Envelop, Location, Phone } from "../../assets/images/svgs/svgs";

export interface Office {
  id: number;
  title: string;
  address: string;
  email: string;
  phone: string;
  
}

interface MapBoxProps {
  offices: Office[];
  buttonText:string;
}

const MapBox: React.FC<MapBoxProps> = ({ offices,buttonText }) => {
  const [open, setOpen] = useState<number | null>(1);

  const toggleDisclosure = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="map_box_main_container">
      <div className="mapbox-container">
        <div className="mapbox-content">
          <button className="box_buttons_location">{buttonText}</button>

          {offices.map((office) => (
            <div
              className="disclosure"
              key={office.id}
              onClick={() => toggleDisclosure(office.id)}
            >
              <div className="disclosure-button">
                <span className="disclosure-title">{office.title}</span>
                <span className={`chevron ${open === office.id ? "open" : ""}`}>
                  {open === office.id ? "-" : "+"}
                </span>
              </div>
              {open === office.id && (
                <div className="disclosure-panel">
                  <ul className="office-list">
                    <li className="office-item">
                      <span className="li_texts_with_icons">
                        <Location /> {office.address}
                      </span>
                    </li>
                    <li className="office-item">
                      <span className="li_texts_with_icons">
                        <Envelop /> {office.email}
                      </span>
                    </li>
                    <li className="office-item">
                      <span className="li_texts_with_icons">
                        <Phone /> {office.phone}
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapBox;
