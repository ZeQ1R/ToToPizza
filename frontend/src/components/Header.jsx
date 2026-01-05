import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-fixed">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="logo">
            ToTo Pizza
          </Link>

          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
