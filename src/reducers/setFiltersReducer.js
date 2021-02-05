import { SET_FILTERS } from "../actions/types";

import rentals from "../data/stays.json";

const initialState = {
  numberOfGuests: null,
  location: null,
  rentals: rentals,
};

export const setFilters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const matchingRentals = [];
      rentals.map((rental) => {
        if (
          action.payload.guests <= rental.maxGuests &&
          `${rental.city}, ${rental.country}` === action.payload.location
        ) {
          matchingRentals.push(rental);
        }
      });
      return {
        ...state,
        numberOfGuests: action.payload.guests,
        location: action.payload.location,
        rentals: matchingRentals,
      };
    default:
      return state;
  }
};
