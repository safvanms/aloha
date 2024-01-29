import React, { useEffect, useState } from "react";
import "./header.css";
import Aloha from "../../assets/images/Aloha.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={clicked ? "sm_nav" : "nav"}>
        <div className="nav_left ">
          <img src={Aloha} alt="aloha" className="logo" />
          {!clicked && <img src={Aloha} alt="aloha" className="sm_logo" />}
          <ul>
            <li>Home</li>
            <li>Surfing</li>
            <li>Hula</li>
            <li>Volcano</li>
          </ul>
        </div>
        <div className="nav_right">
          <button className="nav_button">Book a trip</button>
        </div>

        {clicked && (
          <div className="sm_option">
            <ul>
              <li>Home</li>
              <li>Surfing</li>
              <li>Hula</li>
              <li>Volcano</li>
            </ul>
            <button className="nav_button_sm">Book a trip</button>
          </div>
        )}
        <div className="sm_nav_option" onClick={handleOpen}>
          {clicked ? (
            <IoCloseOutline size={35} />
          ) : (
            <RxHamburgerMenu size={27} />
          )}
        </div>
      </div>
    </>
  );
}
