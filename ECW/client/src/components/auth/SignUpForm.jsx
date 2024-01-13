import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/singUpLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
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
    <div className="form-container">
      <h2>Sign Up</h2>
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
          <FontAwesomeIcon icon={faEnvelope} className="email" />
          <input
            type="text"
            placeholder="Email"
            className="text-name"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={formData.email}
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
          <FontAwesomeIcon icon={faPhone} className="phone" />

          <input
            type="tel"
            placeholder="Contact Number"
            className="text-name"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div class="input-name">
          <input type="checkbox" id="cb" class="check-button" required />
          <label for="cb" class="check">
            I accept the terms and conditions
          </label>
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
        Already have an account <Link to="/account/">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
