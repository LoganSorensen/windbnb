import React, { useState, useEffect } from "react";

import stays from "../data/stays.json";

const Filters = () => {
  const [rentalLocations, setRentalLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childGuests, setChildGuests] = useState(0);
  // const testFocus = (e) => {
  //     console.log('testing', e.target)
  // }

  useEffect(() => {
    const uniqueLocations = [];
    stays.map((rental) => {
      if (!uniqueLocations.includes(`${rental.city}, ${rental.country}`)) {
        uniqueLocations.push(`${rental.city}, ${rental.country}`);
        setRentalLocations(uniqueLocations);
      }
    });
  }, []);

  const selectLocation = (location) => {
    //   console.log('hitting')
    //   console.log(location)
    setLocation(location);
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

  console.log(rentalLocations);

  return (
    <div className="filters-active">
      <form>
        <div className="input-container">
          <label htmlFor="location-input">Location</label>
          <input
            type="text"
            id="location-input"
            placeholder="Select a location"
            value={location !== null ? location : null}
          />
        </div>
        <div className="input-container">
          <label htmlFor="guests-input">Guests</label>
          {/* input will display the number of guests 
          only if a user has added them */}
          <input
            readOnly
            type="text"
            id="guests-input"
            placeholder="Add guests"
            value={
              adultGuests + childGuests > 0
                ? `${adultGuests + childGuests} guests`
                : "Add guests"
            }
          />
        </div>
        <div className="button-container">
          <button>
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
              onClick={() => selectLocation(location)}
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

export default Filters;
