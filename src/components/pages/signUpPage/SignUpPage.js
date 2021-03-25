import React, { useState } from "react";
import AuthForm from "../../authForm/AuthForm";
import firebase from "../../../config/firebaseconfig";
import { useHistory } from "react-router";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  let history = useHistory();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const handleSignUp = () => {
    clearErrors();
    clearInputs();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.goBack();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            console.log("ZeError", err.code);
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  return (
    <div>
      LogIn Page
      <AuthForm
        purpose="Sign Up"
        email={email}
        password={password}
        emailError={emailError}
        setEmail={setEmail}
        setPassword={setPassword}
        passwordError={passwordError}
        authAction={handleSignUp}
      />
    </div>
  );
};

export default SignUpPage;
