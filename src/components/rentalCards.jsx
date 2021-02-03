import React, { useState } from "react";

import RentalCard from "./rentalCard";

import stays from "../data/stays.json";

const RentalCards = () => {
  const [rentals, setRentals] = useState(stays);

  return (
    <div className='rentals'>
      <div className='loc-and-number'>
        <h1>Rentals in Finland</h1>
        <span>{rentals.length} rentals</span>
      </div>
      <div className="rental-cards">
        {rentals.map((rental, index) => (
          <RentalCard key={index} rental={rental} />
        ))}
      </div>
    </div>
  );
};

export default RentalCards;
