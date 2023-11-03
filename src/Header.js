import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
    <div className="top-bar">
      <div className="logo-and-name">
        <img src="logo.png" alt="" className="logo" />
        <h1 className="website-name">PennyPincherPal</h1>
      </div>
      <div className="nav">
        <a href="#" className="button login">Login</a>
        <a href="#" className="button signup">Sign Up</a>
        <a href="#" className="button signup">Conatct</a>
      </div>
    </div>
  </header>
  );
};

export default Header;
