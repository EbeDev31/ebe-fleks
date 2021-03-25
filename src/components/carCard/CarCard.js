import React from "react";

const CarCard = ({ car }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        fontSize: "1em",
        backgroundColor: "honeydew",
        height: "100%",
      }}
    >
      <img src={car.image} alt="someImage" style={{ minWidth: "100%" }} />
      <p>{car.name}</p>
    </div>
  );
};

export default CarCard;
