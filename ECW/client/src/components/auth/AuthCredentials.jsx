// AuthContainer.jsx
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import "../../assets/styles/singUpLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthCredentials = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const toggleForm = () => {
    setIsSignUpVisible((prevValue) => !prevValue);
  };
  return (
    <div className={`auth-container ${isSignUpVisible ? "sign-up" : "login"}`}>
      {/* <button className="btn btn-light btn-close" onClick={toggleForm}>
        x
      </button> */}
      {isSignUpVisible ? (
        <SignUpForm toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
      <div className="toggle-link" onClick={toggleForm}>
        {isSignUpVisible
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </div>
    </div>
  );
};

export default AuthCredentials;
