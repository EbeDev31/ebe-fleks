import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SignUpPage from "./components/pages/signUpPage/SignUpPage";
import LoginPage from "./components/pages/loginPage/LoginPage";
import LogOutPage from "./components/pages/logOutPage/LogOutPage";
import DashBoard from "./components/pages/dashBoard/DashBoard";
import CarDetails from "./components/pages/carDetailsPage/CarDetailsPage";
import MyBookingsPage from "./components/pages/myBookingsPage/MyBookingsPage";
import OrderPage from "./components/pages/orderPage/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/logout" component={LogOutPage} />
        <Route path="/car/:id" component={CarDetails} />
        <Route path="/bookings" component={MyBookingsPage} />
        <Route path="/order/:id" component={OrderPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
