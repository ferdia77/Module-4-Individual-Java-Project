import React from "react";
import { useNavigate } from "react-router-dom";
import Information from "./Information";

const Nav = () => {
    let navigate = useNavigate()

    function navigateToInformation() {
        navigate('/information');
    }

    function navigateHome() {
        navigate('/');
    }

    function navigateContact() {
        navigate('/contact');
    }

    function navigateCast() {
        navigate('/cast');
    }

  return (
    <>
      <div className="nav__wrapper">
        <div className="nav__links">
          <a className="nav__link" onClick={navigateHome}>Home</a>
          <div className="nav__link" onClick={navigateToInformation}>Information & Other Events</div>
          <div className="nav__link" onClick={navigateContact}>Contact</div>
          <div className="nav__link" onClick={navigateCast}>Cast, Crew & Sponsors</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
