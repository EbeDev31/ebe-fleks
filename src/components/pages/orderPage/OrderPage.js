import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../config/firebaseconfig";

const BookingPage = (props) => {
  const carId = props.match.params.id;
  const userId = useSelector((state) => state.firebase.auth.uid);
  const cars = useSelector((state) => state.firestore.ordered.cars);
  const carDetails = cars.filter((car) => car.id === carId)[0];

  const [orderSuccessfull, setOrderSuccessfull] = useState(false);

  const handleOrder = () => {
    const firestore = firebase.firestore();
    firestore
      .collection("orders")
      .add({
        ...carDetails,
        userId,
      })
      .then(() => {
        setOrderSuccessfull(true);
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  };

  return (
    <div>
      <h1>Booking Page</h1>
      {!carDetails && <h2>Loading.................</h2>}

      {carDetails && (
        <div style={{ display: "flex" }}>
          <section
            style={{
              height: "20%",
              width: "25%",
              backgroundColor: "aliceblue",
            }}
          >
            <p>Name :{carDetails.name}</p>
            <p>Model : {carDetails.model}</p>
            <p>year : {carDetails.year}</p>
          </section>
          <img
            src={carDetails.image}
            alt={carDetails.name}
            style={{ width: "25%", height: "20%", backgroundColor: "pink" }}
          />
        </div>
      )}
      {orderSuccessfull && (
        <div>
          <p>Order Successful!!</p>
        </div>
      )}
      {!orderSuccessfull && (
        <button onClick={handleOrder}>Confirm Order</button>
      )}
    </div>
  );
};

export default BookingPage;
