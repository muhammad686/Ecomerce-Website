import React from "react";
import SignUp from "../components/auth/SignUpForm";
import Login from "../components/auth/LoginForm";
import { Routes, Route } from "react-router-dom"; // Import Link
import "../assets/styles/singUpLogin.css";

const Account = () => {
  return (
    <div className="main-account-contianer">
      {/* Add navigation links within the Account component */}
      {/* <div>
        <Link to="/account/">Login</Link>
        <Link to="/account/signup">Sign Up</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default Account;
