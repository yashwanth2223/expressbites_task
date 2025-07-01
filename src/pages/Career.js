import React from "react";
import "../styles/Career.css";

const Career = () => (
  <div className="career-page">
    <h1>Careers at HBX IITM</h1>
    <section className="career-section about">
      <h2>About HBX IITM</h2>
      <p>HBX IITM is a special internal team created exclusively for IIT Madras students. Work directly with our core team to innovate and improve HealthyBites Express!</p>
    </section>
    <div className="career-divider" />
    <section className="career-section what-you-do">
      <h2>🎯 What You'll Do</h2>
      <ul>
        <li>Create new marketing campaigns 📈</li>
        <li>Improve product experience & customer satisfaction 💡</li>
        <li>Solve real company problems 🛠️</li>
        <li>Participate in exclusive hackathons 🧑💻</li>
      </ul>
    </section>
    <div className="career-divider" />
    <section className="career-section perks">
      <h2>🎁 Perks & Benefits</h2>
      <ul>
        <li>Official Certificate & LOR 🏅</li>
        <li>Hands-on startup experience 🚀</li>
        <li>Work with founders 🤝</li>
        <li>Website recognition 🌐</li>
      </ul>
    </section>
    <div className="career-divider" />
    <section className="career-section apply">
      <h2>📝 How to Apply</h2>
      <div className="career-apply-block">
        <div>
          <h3>👥 Eligibility</h3>
          <ul>
            <li>IIT Madras student (UG/PG/PhD) 🎓</li>
            <li>2-3 hours/week availability ⏳</li>
            <li>Passion for startups & problem-solving 💥</li>
          </ul>
        </div>
        <div>
          <h3>🚀 Application Process</h3>
          <ul>
            <li>Fill our short Google Form</li>
            <li>Casual interview chat ☕</li>
            <li>Virtual onboarding 🎉</li>
          </ul>
          <button className="career-apply-btn" onClick={() => window.open('https://forms.gle/', '_blank')}>Apply Now ➡️</button>
        </div>
      </div>
    </section>
    <div className="career-divider" />
    <section className="career-section why-join">
      <h2>🌱 Why Join HBX IITM?</h2>
      <ul>
        <li>💬 Learn startup operations firsthand</li>
        <li>🎯 Boost your resume with real experience</li>
        <li>🤩 Be a changemaker in campus food</li>
        <li>🧠 Contribute to live projects</li>
        <li>🚀 Build while studying</li>
        <li>💡 See your ideas implemented</li>
        <li>🌟 Network with professionals</li>
        <li>📈 Grow with our startup</li>
      </ul>
    </section>
    <div className="career-divider" />
    <section className="career-section contact">
      <h2>📬 Contact Us</h2>
      <p><strong>HBX IITM Team</strong></p>
      <p>5/2, Lake View Street,Tharamani<br/>Chennai, Tamil Nadu 600113</p>
      <p><strong>Email</strong><br/><a href="mailto:hbx-iitm@healthybitesexpress.in">hbx-iitm@healthybitesexpress.in</a></p>
    </section>
  </div>
);

export default Career; 