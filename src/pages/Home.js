import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import { FaThumbsUp } from "react-icons/fa";

// TypingEffect component for tagline
const TypingEffect = ({ text, speed = 60 }) => {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[idx.current]);
      idx.current++;
      if (idx.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}<span className="typing-cursor">|</span></span>;
};

function getRandomTrackId() {
  return 'TRK' + Math.floor(100000 + Math.random() * 900000);
}

const Home = () => {
  const testimonials = [
    {
      text: "The meals are always fresh and delicious. Perfect for my busy schedule!",
      name: "Priya S.",
      stars: 5,
    },
    {
      text: "Quick delivery and healthy options. I love the variety every week!",
      name: "Rahul M.",
      stars: 5,
    },
    {
      text: "Great taste, organic ingredients, and super convenient. Highly recommend!",
      name: "Anjali T.",
      stars: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const testimonialCount = testimonials.length;

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialCount);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonialCount]);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonialCount);

  const [liked, setLiked] = useState(Array(testimonialCount).fill(false));
  const handleLike = (idx) => {
    setLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const [trackId] = useState(getRandomTrackId());
  const [inputId, setInputId] = useState("");
  const [showTrack, setShowTrack] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7);
  const [isDelivered, setIsDelivered] = useState(false);

  useEffect(() => {
    if (showTrack && timeLeft > 0 && !isDelivered) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isDelivered) {
      setIsDelivered(true);
    }
  }, [showTrack, timeLeft, isDelivered]);

  const handleTrackOrder = () => {
    setShowTrack(true);
    setTimeLeft(7);
    setIsDelivered(false);
  };

  return (
    <div className="home-container">
      <section className="hero-section animated-hero">
        <div className="hero-content">
          <h1>Wholesome Bites, Delivered Right.</h1>
          <p className="tagline">
            <TypingEffect text="Delicious, organic meals for busy professionals." speed={45} />
          </p>
          <a href="/menu" className="cta-btn">Order Now 🍽️</a>
        </div>
        <div className="hero-image" />
      </section>
      {/* Conversational Prompt */}
      <section className="convo-prompt">
        <h3>What are you craving today? 👀</h3>
        <div className="quick-replies">
          <button className="quick-reply-btn">Salads 🥗</button>
          <button className="quick-reply-btn">Bowls 🍲</button>
          <button className="quick-reply-btn">Wraps 🌯</button>
          <button className="quick-reply-btn">Surprise Me! 🎲</button>
        </div>
      </section>
      <section className="usp-section">
        <div className="usp">
          <span role="img" aria-label="organic">🌱</span>
          <h3>Organic Ingredients</h3>
        </div>
        <div className="usp">
          <span role="img" aria-label="delivery">⚡</span>
          <h3>Instant Delivery</h3>
        </div>
        <div className="usp">
          <span role="img" aria-label="nutrition">🥗</span>
          <h3>Nutrition-packed Meals</h3>
        </div>
      </section>
      <section className="testimonial-slider">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <button className="arrow-btn left" onClick={handlePrev} aria-label="Previous testimonial">&#8592;</button>
          <div className="testimonial-box carousel-box">
            <p>"{testimonials[current].text}"</p>
            <div className="stars">{"⭐".repeat(testimonials[current].stars)}</div>
            <div className="customer-name">- {testimonials[current].name}</div>
            <button className={`thumbs-up-btn${liked[current] ? " liked" : ""}`} onClick={() => handleLike(current)} aria-label="Like testimonial">
              <FaThumbsUp /> {liked[current] ? "Thanks!" : "Thumbs up"}
            </button>
          </div>
          <button className="arrow-btn right" onClick={handleNext} aria-label="Next testimonial">&#8594;</button>
        </div>
      </section>
      {/* Review Section */}
      <section className="review-section">
        <h2>Customer Reviews</h2>
        <div className="review-list">
          <div className="review-box">
            <p>"HealthyBites has changed my lunch routine. The food is always on time and tastes amazing!"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="customer-name">- Karan P.</div>
          </div>
          <div className="review-box">
            <p>"I appreciate the focus on organic ingredients. My family loves it!"</p>
            <div className="stars">⭐⭐⭐⭐</div>
            <div className="customer-name">- Meera D.</div>
          </div>
          <div className="review-box">
            <p>"Affordable, tasty, and healthy. What more could you ask for?"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="customer-name">- Arjun V.</div>
          </div>
        </div>
        <a href="/reviews" className="read-more-btn">Read more</a>
      </section>
      {/* Track your Order Section */}
      <section className="trackorder-section">
        <h2>Track your Order</h2>
        <p className="trackorder-desc">Enter your Track ID to see where your order is in real-time!</p>
        <div className="trackorder-form">
          <input
            type="text"
            placeholder={`e.g. ${trackId}`}
            value={inputId}
            onChange={e => setInputId(e.target.value)}
            className="trackorder-input"
            aria-label="Track ID"
          />
          <button className="trackorder-btn" onClick={handleTrackOrder}>Track Order</button>
        </div>
        {showTrack && (
          <div className="trackorder-animation">
            <div className="road">
              <div className={`scooty-animation ${isDelivered ? 'delivered' : ''}`}>
                <div className="scooty">
                  <div className="boy-head"></div>
                  <div className="boy-body"></div>
                  <div className="scooty-body"></div>
                  <div className="wheel front"></div>
                  <div className="wheel back"></div>
                </div>
              </div>
              <div className="destination"></div>
            </div>
            <div className="trackorder-time">
              {isDelivered ? 'Order Delivered! 🎉' : `${timeLeft} minutes left`}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home; 