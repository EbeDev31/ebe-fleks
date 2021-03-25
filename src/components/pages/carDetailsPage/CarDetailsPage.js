import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useLoggedIn } from "../../../hooks/useLoggedIn";
import { Link } from "react-router-dom";

const CarDetails = (props) => {
  let isLoggedIn = useLoggedIn();
  let history = useHistory();

  const carId = props.match.params.id;
  const cars = useSelector((state) => state.firestore.ordered.cars);
  const carDetails = cars.filter((car) => car.id === carId)[0];

  const proceedToOrder = () => {
    history.push(`/order/${carId}`);
  };

  return (
    <div>
      <h1>Car Details</h1>
      {carDetails && (
        <>
          <img
            src={carDetails.image}
            alt={carDetails.name}
            style={{ width: "50%", backgroundColor: "pink" }}
          />
          <section>
            <p>Name :{carDetails.name}</p>
            <p>Model : {carDetails.model}</p>
            <p>year : {carDetails.year}</p>
          </section>
        </>
      )}
      {!carDetails && <p>No Car Details to Show</p>}

      {isLoggedIn && <button onClick={proceedToOrder}>Order</button>}

      {/* {isLoggedIn && (
        <Link style={{ marginLeft: 7 }} to={`/order/${carId}`}>
          Book Car
        </Link>
      )} */}

      {!isLoggedIn && (
        <button onClick={() => history.push("/login")}>Sign In to Order</button>
      )}
    </div>
  );
};

export default CarDetails;
