import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label="ormobiles homepage">
          <span className="header__logo">or</span>
          <div>
            <p className="header__name">ormobiles</p>
            <p className="header__tag">Tech Discovery & Price Compare</p>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <a href="/">Mobiles</a>
          <a href="/">Laptops</a>
          <a href="/">Comparisons</a>
          <a href="/">Blog</a>
        </nav>

        <Link to="/checkout" className="header__cta">
          Today&apos;s Deals
        </Link>
      </div>
    </header>
  );
}

export default Header;
