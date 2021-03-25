import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useHistory } from "react-router";

const MyBookingsPage = () => {
  let history = useHistory();
  const userId = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect([{ collection: "orders" }]);

  const bookings = useSelector((state) => state.firestore.ordered.orders);
  const myBookings = bookings
    ? bookings.filter((booking) => booking.userId === userId)
    : null;

  const seeAvailableCars = () => {
    history.push("/");
  };

  return (
    <>
      {isEmpty(myBookings) && (
        <div style={{ display: "flex" }}>
          <p>No Bookings Yet, See Available Cars</p>
          <button onClick={seeAvailableCars}>See Available cars</button>
        </div>
      )}

      {!isEmpty(myBookings) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Bookings So Far</h1>
          {myBookings.map((booking, index) => (
            <div key={index} style={{ display: "flex", margin: 10 }}>
              <section
                style={{
                  height: "20%",
                  width: "25%",
                  backgroundColor: "aliceblue",
                }}
              >
                <p>Name :{booking.name}</p>
                <p>Model : {booking.model}</p>
                <p>Year : {booking.year}</p>
              </section>
              <img
                src={booking.image}
                alt={booking.name}
                style={{ width: "25%", height: "20%", backgroundColor: "pink" }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyBookingsPage;
