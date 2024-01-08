// LoginForm.jsx
import React from "react";
import "../../assets/styles/singUpLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = ({ toggleForm }) => {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <div className="sign-up-form-container">
        <input type="text" className="form-control" placeholder="Username" />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
      <div className="third-party-sign-up">
        <p>Login with</p>
        <span>
          <div className="btn btn-outline-dark">Google</div>
          <div className="btn btn-outline-primary">Facebook</div>
          <div className="btn btn-danger">Pinterest</div>
        </span>
      </div>
      <div className="login-if-registered">
        <div className="toggle-link" onClick={toggleForm}>
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
