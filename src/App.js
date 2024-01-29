import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Highlights from "./components/Highlights/Highlights";
import Categories from "./components/Categories/Categories";
import Guide from "./components/Guide/Guide";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Home />
      <Highlights />
      <div className="categories_and_guides">
        <div className="categories_sec">
          <h3>Categories</h3>
          <Categories category={"Adventure"} />
          <Categories category={"Culinary"} />
          <Categories category={"Eco-tourism"} />
          <Categories category={"Family"} />
          <Categories category={"Sport"} />
        </div>
        <div className="guide_sec">
          <h3>Travel Guide</h3>
          <Guide />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
