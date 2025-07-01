import React, { useState } from "react";
import "../styles/Menu.css";
import { useCart } from "../CartContext";
import { NavLink } from "react-router-dom";

const lunchMenu = [
  { name: "Grilled Veggie Wrap", desc: "Whole wheat wrap with grilled veggies & hummus.", price: 120, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Quinoa Salad Bowl", desc: "Protein-rich quinoa, chickpeas, and fresh greens.", price: 150, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  { name: "Paneer Power Bowl", desc: "Paneer, brown rice, and roasted veggies.", price: 170, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { name: "Classic Caesar Salad", desc: "Romaine, parmesan, croutons, and Caesar dressing.", price: 110, img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80" },
];

const dinnerMenu = [
  { name: "Herb Grilled Chicken", desc: "Chicken breast, herbs, and sautéed veggies.", price: 220, img: "https://images.unsplash.com/photo-1514512364185-4c2b67857b39?auto=format&fit=crop&w=400&q=80" },
  { name: "Lentil Stew & Rice", desc: "Hearty lentil stew with brown rice.", price: 140, img: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80" },
  { name: "Stuffed Bell Peppers", desc: "Bell peppers stuffed with quinoa and veggies.", price: 160, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Tofu Stir Fry", desc: "Tofu, broccoli, and bell peppers in a tangy sauce.", price: 180, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState("");
  const [qty, setQty] = useState({});

  const handleAdd = (item) => {
    const quantity = qty[item.name] || 1;
    for (let i = 0; i < quantity; i++) addToCart(item);
    setAdded(item.name);
    setTimeout(() => setAdded(""), 1200);
  };

  const renderMenu = (menu) => (
    <div className="menu-cards" role="list">
      {menu.map((item, idx) => (
        <section className="menu-card" key={idx} tabIndex={0} aria-label={item.name}>
          <img src={item.img} alt={item.name} className="menu-img" />
          <div className="menu-card-content">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="menu-card-bottom">
              <span className="menu-price">₹{item.price}</span>
              <label htmlFor={`qty-${item.name}`} className="visually-hidden">Quantity</label>
              <input
                id={`qty-${item.name}`}
                type="number"
                min="1"
                value={qty[item.name] || 1}
                onChange={e => setQty({ ...qty, [item.name]: Math.max(1, parseInt(e.target.value)||1) })}
                className="qty-input"
                aria-label="Quantity"
              />
              <button
                className="add-cart-btn"
                onClick={() => handleAdd(item)}
                aria-label={`Add ${qty[item.name] || 1} ${item.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
            {added === item.name && <div className="added-toast" role="status">Added!</div>}
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <section className="menu-section">
        <h2>Lunch Menu</h2>
        {renderMenu(lunchMenu)}
      </section>
      <section className="menu-section">
        <h2>Dinner Menu</h2>
        {renderMenu(dinnerMenu)}
      </section>
      <NavLink to="/checkout" className="checkout-link">Go to Checkout</NavLink>
    </div>
  );
};

export default Menu; 