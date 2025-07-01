import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import TrackOrder from "./pages/TrackOrder";
import Offers from "./pages/Offers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscriptions from "./pages/Subscriptions";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./CartContext";
import Privacy from "./pages/Privacy";
import Career from "./pages/Career";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
