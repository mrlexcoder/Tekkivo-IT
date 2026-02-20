'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../public/Styles/HeaderCss.css';
import menuData from '../data/menuData.json';

export default function TopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileSubmenu = (id: number) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="top-header">
      {/* Top Header */}
      <div className="top-header-main">
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
                <svg className="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
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
      </div>

      {/* Secondary Navigation */}
      <div className="secondary-nav-wrapper">
        <nav className="secondary-nav">
          {menuData.secondaryMenu.map((item) => (
            <div key={item.id} className="secondary-nav-item">
              <Link href={item.href} className="secondary-nav-link">
                {item.label}
                {item.hasDropdown && (
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.hasDropdown && item.submenu && (
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-columns">
                      {item.submenu.columns.map((column, idx) => (
                        <div key={idx} className="mega-menu-column">
                          <div className="mega-menu-title">{column.title}</div>
                          <div className="mega-menu-items">
                            {column.items.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className="mega-menu-item"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* AI Button */}
          <button className="ai-button">
            AI
            <span className="ai-badge">NEW</span>
          </button>

          {/* Icons */}
          <div className="nav-icons">
            <button className="icon-button" aria-label="Search" onClick={toggleSearch}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <button className="icon-button" aria-label="User">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Search Bar Dropdown */}
      <div className={`search-dropdown ${isSearchOpen ? 'open' : ''}`}>
        <div className="search-dropdown-inner">
          <div className="search-input-wrapper">
            <svg className="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search for companies, technologies, specialists..."
              autoFocus={isSearchOpen}
            />
            <button className="search-close-btn" onClick={toggleSearch} aria-label="Close search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Secondary Navigation */}
      {isMenuOpen && (
        <div className="mobile-secondary-nav">
          {menuData.secondaryMenu.map((item) => (
            <div key={item.id} className="mobile-secondary-item">
              <div
                className="mobile-secondary-link"
                onClick={() => item.hasDropdown && toggleMobileSubmenu(item.id)}
              >
                <Link href={item.href} onClick={() => !item.hasDropdown && setIsMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </div>

              {/* Mobile Submenu */}
              {item.hasDropdown && item.submenu && (
                <div className={`mobile-submenu ${openMobileSubmenu === item.id ? 'open' : ''}`}>
                  {item.submenu.columns.map((column, idx) => (
                    <div key={idx}>
                      <div className="mobile-submenu-title">{column.title}</div>
                      {column.items.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.href}
                          className="mobile-submenu-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
