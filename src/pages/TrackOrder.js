import React, { useState, useEffect } from "react";
import "../styles/TrackOrder.css";

function getRandomTrackId() {
  return 'TRK' + Math.floor(100000 + Math.random() * 900000);
}

const TrackOrder = () => {
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
    <div className="trackorder-page">
      <div className="trackorder-container">
        <h1>Track Your Order</h1>
        <p className="trackorder-subtitle">Enter your Track ID to see where your order is in real-time!</p>
        
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

        <div className="trackorder-info">
          <h3>How to track your order:</h3>
          <ul>
            <li>Enter the Track ID you received after placing your order</li>
            <li>Click "Track Order" to see real-time delivery status</li>
            <li>Watch the delivery animation to see your order's progress</li>
            <li>Get notified when your order is delivered</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder; 