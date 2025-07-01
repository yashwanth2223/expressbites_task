import React, { useState } from "react";
import "../styles/Contact.css";

const CONTACT_INFO = (
  <div className="contact-card-content">
    <h2>Contact Information</h2>
    <p><strong>Address</strong><br />5/2, Lake View Street, Anna Nagar, Tharamani<br />Chennai, Tamil Nadu 600113</p>
    <p><strong>Phone</strong><br />+91 86086 92978, +91 86086 92218</p>
    <p><strong>Email</strong><br /><a href="mailto:contact@healthybitesexpress.in">contact@healthybitesexpress.in</a></p>
  </div>
);

const BUSINESS_HOURS = (
  <div className="contact-card-content">
    <h2>Business Hours</h2>
    <p><strong>Monday - Friday</strong><br />8:00 AM - 10:00 PM</p>
    <p><strong>Saturday - Sunday</strong><br />9:00 AM - 9:00 PM</p>
  </div>
);

const Contact = () => {
  const [activeCard, setActiveCard] = useState("info");
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="contact-page-grid">
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            rows={5}
            required
          />
          <button type="submit" className="contact-submit-btn">Submit</button>
          {submitted && <div className="contact-success">Thank you for your feedback!</div>}
        </form>
      </div>
      <div className="contact-cards-section">
        <div className={`contact-card${activeCard === "info" ? " active" : ""}`} onClick={() => setActiveCard("hours")}
          style={{ zIndex: activeCard === "info" ? 2 : 1 }}>
          <div className={`card-inner${activeCard === "info" ? " show" : ""}`}>{CONTACT_INFO}</div>
        </div>
        <div className={`contact-card${activeCard === "hours" ? " active" : ""}`} onClick={() => setActiveCard("info")}
          style={{ zIndex: activeCard === "hours" ? 2 : 1 }}>
          <div className={`card-inner${activeCard === "hours" ? " show" : ""}`}>{BUSINESS_HOURS}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 