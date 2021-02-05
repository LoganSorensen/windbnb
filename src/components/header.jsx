import React from "react";
import { connect } from "react-redux";

import { setFilters } from "../actions/setFiltersActions";

import logo from "../assets/logo.svg";

const Header = (props) => {
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

  const handleSubmit = () => {
    props.setFilters({
      location: props.location,
      guests: props.numberOfGuests,
    });
  };

  return (
    <header>
      <img src={logo} alt="windbnb logo" />
      <div className="filters">
        {props.location === null ? (
          <div className="location-filter no-selection" onClick={handleClick}>
            Select a location
          </div>
        ) : (
          <div className="location-filter" onClick={handleClick}>
            {props.location}
          </div>
        )}
        {props.numberOfGuests === null ? (
          <div className="guest-filter no-selection" onClick={handleClick}>
            Add guests
          </div>
        ) : (
          <div className="guest-filter" onClick={handleClick}>
            {props.numberOfGuests}
            {props.numberOfGuests > 1 || props.numberOfGuests === 0
              ? " guests"
              : " guest"}
          </div>
        )}
        <button className="search-btn" onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    location: state.setFilters.location,
    numberOfGuests: state.setFilters.numberOfGuests,
  };
};

export default connect(mapStateToProps, { setFilters })(Header);
