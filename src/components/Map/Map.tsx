// Map.tsx
import React from "react";
import "./map.css";
import MapBox, { Office } from "./MapBox";

interface MapProps {
  offices: Office[];
  buttonText: string;
}

const Map: React.FC<MapProps> = ({ offices, buttonText }) => {
  return (
    <div className="map_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-map"
      ></iframe>
      <div className="map_content container">
        <MapBox offices={offices} buttonText={buttonText} />
      </div>
    </div>
  );
};

export default Map;
