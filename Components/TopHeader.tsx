'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../public/Styles/HeaderCss.css';
import menuData from '../data/menuData.json';

export default function TopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">
              <div className="logo-shape"></div>
            </div>
            <span className="logo-text">IT Rating</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {menuData.mainMenu.map((item) => (
              <Link key={item.id} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="header-right">
            <div className="language-selector">
              <span className="lang-active">EN</span>
              <span className="lang-divider">|</span>
              <span className="lang-option">UA</span>
            </div>
            <button className="featured-btn">
              <span className="star-icon">★</span>
              Get featured
              <span className="new-badge">NEW</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            {menuData.mainMenu.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
