import { Link, useHistory } from "react-router-dom";
import React from "react";
import firebase from "../../config/firebaseconfig";

import { useLoggedIn } from "../../hooks/useLoggedIn";

const NavBar = () => {
  let isLoggedIn = useLoggedIn();

  let history = useHistory();

  const handleSignOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link to={"/"}>Home</Link>
        {!isLoggedIn && (
          <>
            <Link style={{ marginLeft: "auto" }} to={"/login"}>
              Sign In
            </Link>
            <Link style={{ marginLeft: 7 }} to={"/signup"}>
              Sign Up
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link style={{ marginLeft: "auto" }} to={"/bookings"}>
              My Bookings
            </Link>
            <button
              style={{ marginLeft: 30 }}
              to={"logout"}
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
