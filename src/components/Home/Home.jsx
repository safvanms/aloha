import React from "react";
import "./home.css";
import BG from "../../assets/images/mainBg.png";
import BG_SM from "../../assets/images/mainBg_sm.png";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <div className="main">
        <img src={BG} alt="background_image" className="main_bg" />
        <img src={BG_SM} alt="background_image" className="main_bg_sm" />
        <h1 className="heading">
          Welcome <br />
          to Hawaii
        </h1>
      </div>
    </>
  );
}
