import { useEffect, useState } from "react";
import firebase from "../config/firebaseconfig";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return isLoggedIn;
};
