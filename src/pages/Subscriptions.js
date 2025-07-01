import React from "react";
import "../styles/Subscriptions.css";

const plans = [
  {
    name: "Neo",
    price: "₹69/mo",
    features: [
      "8 meals/month",
      "Standard menu access",
      "1 free delivery",
      "Basic support"
    ],
    offers: ["5% off on add-ons"]
  },
  {
    name: "Gold",
    price: "₹99/mo",
    features: [
      "20 meals/month",
      "Full menu access",
      "4 free deliveries",
      "Priority support"
    ],
    offers: ["10% off on add-ons", "1 free dessert per week"]
  },
  {
    name: "Gold Pro",
    price: "₹159/mo",
    features: [
      "Unlimited meals/month",
      "Premium menu access",
      "Unlimited free deliveries",
      "24/7 support"
    ],
    offers: ["20% off on add-ons", "Free dessert daily", "Exclusive chef specials"]
  }
];

const Subscriptions = () => (
  <div className="subscriptions-page">
    <h1>Monthly Subscription Plans</h1>
    <div className="plans-list">
      {plans.map((plan) => (
        <div className={`plan-card plan-${plan.name.replace(/\s+/g, '').toLowerCase()}`} key={plan.name}>
          <h2>{plan.name}</h2>
          <div className="plan-price">{plan.price}</div>
          <ul className="plan-features">
            {plan.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="plan-offers">
            <strong>Offers:</strong>
            <ul>
              {plan.offers.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
          <button className="plan-select-btn">Choose {plan.name}</button>
        </div>
      ))}
    </div>
  </div>
);

export default Subscriptions; 