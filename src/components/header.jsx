import React from "react";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="windbnb logo" />
      <div className="filters">
        {/* change these filters to display dynamically */}
        <div className="location-filter">Helsinki, Finland</div>
        {1 === 1 ? (
          <div className="guest-filter no-selection">Add guests</div>
        ) : (
          <div className="guest-filter">Add guests</div>
        )}
        <div className="search-btn">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
