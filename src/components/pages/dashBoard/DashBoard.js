import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import CarCard from "../../carCard/CarCard";
import { useFirestoreConnect } from "react-redux-firebase";

const DashBoard = () => {
  useFirestoreConnect([{ collection: "cars" }]);
  const cars = useSelector((state) => state.firestore.ordered.cars);
  let history = useHistory();

  const seeCardDetails = (carId) => {
    history.push(`/car/${carId}`);
  };

  return (
    <div>
      <h1>DashBoard</h1>
      {!cars && <h2>Stil Loading................</h2>}
      {cars && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 20%)",
            justifyContent: "space-around",
            height: "60%",
            gap: 10,
          }}
        >
          {cars.map((car, index) => {
            return (
              <div
                key={index}
                onClick={() => seeCardDetails(car.id)}
                style={{ backgroundColor: "green" }}
              >
                <CarCard car={car} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
