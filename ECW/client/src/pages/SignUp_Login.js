import React, { useState } from "react";
import "../assets/styles/singUpLogin.css";

const SignUpLogin = () => {
  const [activeForm, setActiveForm] = useState("signupForm");

  const showForm = (formId) => {
    setActiveForm(formId);
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab-btn ${activeForm === "signupForm" ? "active" : ""}`}
          onClick={() => showForm("signupForm")}
        >
          Sign Up
        </button>
        <button
          className={`tab-btn ${activeForm === "loginForm" ? "active" : ""}`}
          onClick={() => showForm("loginForm")}
        >
          Login
        </button>
      </div>

      <div
        id="signupForm"
        className={`form-container ${
          activeForm === "signupForm" ? "active" : ""
        }`}
      >
        <form>
          <div className="form-group">
            <label htmlFor="signupUsername">Username:</label>
            <input
              type="text"
              id="signupUsername"
              name="signupUsername"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupPassword">Password:</label>
            <input
              type="password"
              id="signupPassword"
              name="signupPassword"
              required
            />
          </div>
          <button type="button" className="action-btn">
            Sign Up
          </button>
        </form>
      </div>

      <div
        id="loginForm"
        className={`form-container ${
          activeForm === "loginForm" ? "active" : ""
        }`}
      >
        <form>
          <div className="form-group">
            <label htmlFor="loginUsername">Username:</label>
            <input
              type="text"
              id="loginUsername"
              name="loginUsername"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password:</label>
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              required
            />
          </div>
          <button type="button" className="action-btn">
            Login
          </button>
        </form>
      </div>

      <div className="social-login">
        <button className="social-login-btn">Login with Google</button>
        <button className="social-login-btn">Login with Facebook</button>
      </div>
    </div>
  );
};

export default SignUpLogin;
