import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("Logged in successfully!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <div className="divider"><span>or</span></div>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="button" className="show-btn" onClick={() => setShowPassword((v) => !v)} aria-label="Show or hide password">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="button" className="google-btn">
          <FcGoogle className="google-icon" />
          Continue with Google
        </button>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-footer">
          <span>Don't have an account? </span>
          <NavLink to="/signup">Register here</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login; 