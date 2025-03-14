import React from "react";
import LandingPage from "./pages/LandingPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* <LandingPage /> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
