import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setFilters } from "../actions/setFiltersActions";

import stays from "../data/stays.json";

const Filters = (props) => {
  const [rentalLocations, setRentalLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childGuests, setChildGuests] = useState(0);

  const locationOptions = document.querySelector(".location-options");
  const guestOptions = document.querySelector(".guest-options");

  let bodyBlackout = document.querySelector(".body-blackout");
  let filtersForm = document.querySelector(".filters-active");

  document.addEventListener("DOMContentLoaded", function () {
    bodyBlackout = document.querySelector(".body-blackout");
    filtersForm = document.querySelector(".filters-active");
  });

  useEffect(() => {
    const uniqueLocations = [];
    stays.map((rental) => {
      if (!uniqueLocations.includes(`${rental.city}, ${rental.country}`)) {
        uniqueLocations.push(`${rental.city}, ${rental.country}`);
        setRentalLocations(uniqueLocations);
      }
    });
  }, []);

  const handleFocus = (e) => {
    if (e.target.id === "location-input") {
      locationOptions.style = "visibility: visible";
      guestOptions.style = "visibility: hidden";
    } else if (e.target.id === "guests-input") {
      guestOptions.style = "visibility: visible";
      locationOptions.style = "visibility: hidden";
    }
  };

  const addGuest = (e) => {
    if (e.target.name === "child") {
      setChildGuests(childGuests + 1);
    } else {
      setAdultGuests(adultGuests + 1);
    }
  };

  const removeGuest = (e) => {
    if (e.target.name === "child") {
      if (childGuests > 0) {
        setChildGuests(childGuests - 1);
      }
    } else {
      if (adultGuests > 0) {
        setAdultGuests(adultGuests - 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFilters({ location: location, guests: adultGuests + childGuests });
    bodyBlackout.style = "display: none";
    filtersForm.style = "top: -50vh";
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="filters-active">
      <form>
        <div className="input-container">
          <label htmlFor="location-input">Location</label>
          <input
            readOnly
            type="text"
            id="location-input"
            placeholder="Select a location"
            value={location !== null ? location : ""}
            onFocus={handleFocus}
          />
        </div>
        <div className="input-container">
          <label htmlFor="guests-input">Guests</label>
          <input
            readOnly
            type="text"
            id="guests-input"
            placeholder="Add guests"
            value={
              adultGuests + childGuests > 0
                ? `${adultGuests + childGuests} guests`
                : ""
            }
            onFocus={handleFocus}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSubmit}>
            <i className="fas fa-search"></i>Search
          </button>
        </div>
      </form>
      <div className="filter-options">
        <div className="location-options">
          {rentalLocations.map((location, index) => (
            <div
              key={index}
              className="location-option"
              onClick={() => setLocation(location)}
            >
              <i className="fas fa-map-marker-alt"></i>
              {location}
            </div>
          ))}
        </div>
        <div className="guest-options">
          <div className="guest-option">
            <p className="guest-type">Adults</p>
            <span className="guest-age">Ages 13 or above</span>
            <div className="number-of-guests">
              <button name="adult" onClick={removeGuest}>
                -
              </button>
              <span>{adultGuests}</span>
              <button name="adult" onClick={addGuest}>
                +
              </button>
            </div>
          </div>
          <div className="guest-option">
            <p className="guest-type">Children</p>
            <span className="guest-age">Ages 2-12</span>
            <div className="number-of-guests">
              <button name="child" onClick={removeGuest}>
                -
              </button>
              <span>{childGuests}</span>
              <button name="child" onClick={addGuest}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setFilters })(Filters);
