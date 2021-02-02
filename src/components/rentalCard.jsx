import React from "react";

const RentalCard = ({ rental }) => {
  return (
    <div className="rental-card">
        <div className="rental-image">

      <img src={rental.photo} alt="rental" />
        </div>
      <div className="details-and-rating">
        <div className="rental-details">
          <span>{rental.type}</span>
          {rental.beds != null && (
              <span> . {rental.beds} beds</span>
          )}
        </div>
        <div className="rating">
        <i class="fas fa-star"></i>
          <span>{rental.rating}</span>
        </div>
      </div>
      <p className="rental-name">{rental.title}</p>
    </div>
  );
};

export default RentalCard;
