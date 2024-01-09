import React from "react";
import SignUp from "../components/auth/SignUpForm";
import Login from "../components/auth/LoginForm";
import "../assets/styles/singUpLogin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Account = () => {
  return (
    <div className="main-account-contianer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Account;
