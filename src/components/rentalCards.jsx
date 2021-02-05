import React from "react";
import { connect } from "react-redux";

import RentalCard from "./rentalCard";

const RentalCards = (props) => {
  return (
    <div className="rentals">
      <div className="loc-and-number">
        <h1>Rentals in Finland</h1>
        <span>{props.rentals.length} rentals</span>
      </div>
      <div className="rental-cards">
        {props.rentals.map((rental, index) => (
          <RentalCard key={index} rental={rental} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rentals: state.setFilters.rentals,
  };
};

export default connect(mapStateToProps, {})(RentalCards);
