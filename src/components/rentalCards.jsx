import React, { useState } from "react";

import RentalCard from "./rentalCard";

import stays from "../data/stays.json";

const RentalCards = () => {
  const [rentals, setRentals] = useState(stays);
  console.log(rentals);
  
  return (
    <div>
      {rentals.map((rental, index) => (
        <RentalCard key={index} rental={rental} />
      ))}
    </div>
  );
};

export default RentalCards;
