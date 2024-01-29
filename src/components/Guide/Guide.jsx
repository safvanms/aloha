import React from "react";
import "./guide.css";

import guides from '../../guides'

export default function Guide() {
  return (
    <div className="guide_container">
      {guides?.map(({ no, name, year_of_start, image }) => (
        <div className="guide_details" key={no}>
          <div>
            <h2>{name}</h2>
            <p>Guide since {year_of_start}</p>
          </div>
          <img src={image} alt="guide" />
          <div className="contact">Contact</div>
        </div>
      ))}
    </div>
  );
}
