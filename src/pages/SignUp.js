import React, { useState } from "react";
import "../styles/SignUp.css";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert("Registered successfully!");
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="divider"><span>or</span></div>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
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
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp; 