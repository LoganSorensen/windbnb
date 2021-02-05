import React from "react";

import logo from "../assets/logo.svg";

const Header = () => {
  let bodyBlackout = document.querySelector(".body-blackout");
  let filtersForm = document.querySelector(".filters-active");

  document.addEventListener("DOMContentLoaded", function () {
    bodyBlackout = document.querySelector(".body-blackout");
    filtersForm = document.querySelector(".filters-active");
  });

  const handleClick = () => {
    bodyBlackout.style = "display: block";
    filtersForm.style = "top: 0";
    document.body.classList.add("no-scroll");
  };

  return (
    <header>
      <img src={logo} alt="windbnb logo" />
      <div className="filters">
        {/* change these filters to display dynamically */}
        <div className="location-filter"  onClick={handleClick}>Helsinki, Finland</div>
        {1 === 1 ? (
          <div className="guest-filter no-selection" onClick={handleClick}>Add guests</div>
        ) : (
          <div className="guest-filter" onClick={handleClick}>Add guests</div>
        )}
        <div className="search-btn">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
