import React from "react";
import "./categories.css";
import { GoArrowRight } from "react-icons/go";

export default function Categories({ category }) {
  return (
    <div className="category">
      <p>{category}</p>
      <div className="icon">
        <GoArrowRight size={18} />
      </div>
    </div>
  );
}
