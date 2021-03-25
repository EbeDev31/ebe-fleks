import React, { useState } from "react";
import AuthForm from "../../authForm/AuthForm";
import firebase from "../../../config/firebaseconfig";
import { useHistory } from "react-router";

const LoginPage = () => {
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

  const handleLogin = () => {
    clearErrors();
    clearInputs();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.goBack();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <AuthForm
        purpose="Login"
        email={email}
        password={password}
        emailError={emailError}
        setEmail={setEmail}
        setPassword={setPassword}
        passwordError={passwordError}
        authAction={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
