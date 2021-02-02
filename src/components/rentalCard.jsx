import React from "react";

const RentalCard = ({ rental }) => {
  return (
    <div className="rental-card">
      <img src={rental.photo} alt="rental" />
      <div className="details-and-rating">
        <div className="rental-details">
          <span>{rental.type}</span>
          <span>{rental.beds}</span>
        </div>
        <div className="rating">
          <span>{rental.rating}</span>
        </div>
      </div>
      <p className="rental-name">{rental.title}</p>
    </div>
  );
};

export default RentalCard;
