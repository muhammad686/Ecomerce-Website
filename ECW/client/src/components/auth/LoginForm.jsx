import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/singUpLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    countryCode: "+1", // Default country code
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-name">
          <FontAwesomeIcon icon={faUser} className="username" />
          <input
            type="text"
            placeholder="Username"
            className="text-name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-name">
          <FontAwesomeIcon icon={faLock} className="lock" />
          <input
            type="password"
            placeholder="Password"
            className="text-name"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-name">
          <input
            type="submit"
            className="button"
            name="submit"
            value="Sign Up"
          />
        </div>
      </form>
      <p>
        <a href="">Forgot Password?</a> Create a new Account
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
