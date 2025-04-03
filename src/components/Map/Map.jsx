import React from 'react';
import './map.css';
import MapBox from './MapBox';

const Map = () => {
  return (
    <div className="map_container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7603843359943!2d-74.01473428762823!3d40.67924827127927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a8a1e8232e1%3A0x7f1e484e285acf79!2s159%20Pioneer%20St%2C%20Brooklyn%2C%20NY%2011231%2C%20USA!5e0!3m2!1sen!2s!4v1743675279052!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-map"
      ></iframe>
      <div className='map_content container'>
      <MapBox/>
      </div>
    </div>
  );
};

export default Map;
