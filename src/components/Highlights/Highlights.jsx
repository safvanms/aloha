import React from "react";
import "./highlights.css";
import highlights from "../../highlights";
import { GoArrowRight } from "react-icons/go";

export default function Highlights() {
  return (
    <div className="highlights">
      <h3 className="h_head">Highlights</h3>
      <div className="highlights_cards_container">
        {highlights.map(({ id, name, description, image }) => (
          <div className="highlight_card" key={id}>
            <img src={image} alt="images" />
            <div className="details">
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="icon">
                <GoArrowRight size={18}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
