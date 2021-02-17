import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
      return null;
    });
  }, []);

  const handleFocus = (e) => {
    if (e.target.id === "location-input") {
      guestOptions.style = "display: none";
      locationOptions.style = "display: block";
    } else if (e.target.id === "guests-input") {
      guestOptions.style = "display: block";
      locationOptions.style = "display: none";
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
      childGuests > 0 && setChildGuests(childGuests - 1);
    } else {
      adultGuests > 0 && setAdultGuests(adultGuests - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFilters({ location: location, guests: adultGuests + childGuests });
    bodyBlackout.style = "display: none";
    filtersForm.style = "bottom: 0vh";
    document.body.classList.remove("no-scroll");
  };

  const closeForm = () => {
    bodyBlackout.style = "display: none";
    filtersForm.style = "bottom: 0vh";
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="filters-active">
      <div className="filter-header">
        <span>Edit your search</span>
        <button onClick={closeForm}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
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
          <button className="submit" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
            Search
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
              <FontAwesomeIcon icon={faMapMarkerAlt} />
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
      <button className="submit-mobile" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
        Search
      </button>
    </div>
  );
};

export default connect(null, { setFilters })(Filters);
