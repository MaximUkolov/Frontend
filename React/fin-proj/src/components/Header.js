import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <div className="logo">Logo</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <div className="search-and-cart">
      <input type="text" placeholder="Search" />
      <Link to="/cart" className="cart-icon">Cart</Link>
    </div>
  </header>
);

export default Header;
