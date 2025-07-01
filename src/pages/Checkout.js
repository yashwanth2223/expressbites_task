import React, { useState } from "react";
import "../styles/Checkout.css";
import { useCart } from "../CartContext";
import { NavLink } from "react-router-dom";

const coupons = [
  { code: "BITES15", desc: "15% off for first order", discount: 0.15 },
  { code: "BITES30", desc: "30% off on 15th order", discount: 0.30 },
];

const CGST_RATE = 0.025;
const SGST_RATE = 0.025;

const recommended = [
  { name: "Protein Power Bowl", price: 180, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { name: "Spicy Chickpea Wrap", price: 130, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Fresh Fruit Salad", price: 90, img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80" },
];

const desserts = [
  { name: "Chocolate Brownie", price: 70, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Mango Mousse", price: 80, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  { name: "Berry Cheesecake", price: 90, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
];

const Checkout = () => {
  const { cart, updateQty, removeFromCart, addToCart } = useCart();
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [added, setAdded] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = selectedCoupon ? subtotal * selectedCoupon.discount : 0;
  const cgst = (subtotal - discount) * CGST_RATE;
  const sgst = (subtotal - discount) * SGST_RATE;
  const total = subtotal - discount + cgst + sgst;

  const handleAdd = (item) => {
    addToCart(item);
    setAdded(item.name);
    setTimeout(() => setAdded(""), 1200);
  };

  const renderExtra = (title, items) => (
    <section className="extra-section">
      <h2>{title}</h2>
      <div className="extra-cards">
        {items.map((item, idx) => (
          <div className="extra-card" key={idx} tabIndex={0} aria-label={item.name}>
            <img src={item.img} alt={item.name} className="extra-img" />
            <div className="extra-info">
              <span className="extra-name">{item.name}</span>
              <span className="extra-price">₹{item.price}</span>
              <button className="add-cart-btn" onClick={() => handleAdd(item)} aria-label={`Add ${item.name} to cart`}>
                Add
              </button>
              {added === item.name && <span className="added-toast" role="status">Added!</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  <span>{item.name}</span>
                  <span>
                    <button onClick={() => updateQty(item.name, Math.max(1, item.qty - 1))}>-</button>
                    <input type="number" min="1" value={item.qty} onChange={e => updateQty(item.name, Math.max(1, parseInt(e.target.value)||1))} style={{width: '2.5em', margin: '0 0.5em'}} />
                    <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
                  </span>
                  <span>₹{item.price * item.qty}</span>
                  <button onClick={() => removeFromCart(item.name)} style={{marginLeft: '0.7em', color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer'}}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bill-section">
          <h2>Bill Details</h2>
          <div className="bill-row"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
          <div className="bill-row coupon-row">
            <span>Coupon</span>
            <div className="coupon-field">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={selectedCoupon ? selectedCoupon.code : ""}
                onFocus={() => setShowDropdown(true)}
                readOnly
              />
              <button className="dropdown-btn" onClick={() => setShowDropdown((v) => !v)}>&#9660;</button>
              {showDropdown && (
                <ul className="coupon-dropdown">
                  {coupons.map((c, idx) => (
                    <li key={c.code} onClick={() => { setSelectedCoupon(c); setShowDropdown(false); }}>
                      <span className="coupon-code">{c.code}</span> <span className="coupon-desc">{c.desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {selectedCoupon && (
            <div className="bill-row"><span>Discount ({selectedCoupon.code})</span><span>-₹{discount.toFixed(2)}</span></div>
          )}
          <div className="bill-row"><span>CGST (2.5%)</span><span>₹{cgst.toFixed(2)}</span></div>
          <div className="bill-row"><span>SGST (2.5%)</span><span>₹{sgst.toFixed(2)}</span></div>
          <div className="bill-row total-row"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
          <button className="pay-btn" disabled={cart.length === 0}>Pay Now</button>
          <NavLink to="/track" className="track-order-link">Track Your Order</NavLink>
        </div>
      </div>
      {renderExtra("Recommended for You", recommended)}
      {renderExtra("Desserts", desserts)}
    </div>
  );
};

export default Checkout; 