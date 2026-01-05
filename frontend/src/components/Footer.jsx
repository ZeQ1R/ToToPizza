import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">ToTo Pizza</h3>
            <p className="footer-text">
              Authentic Italian pizza and pasta in the heart of Tetovo.
              Made with love and the finest ingredients.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/menu" className="footer-link">Menu</Link>
              <Link to="/reservations" className="footer-link">Reservations</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={18} />
                <span>{contactInfo.address}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Opening Hours</h4>
            <div className="footer-hours">
              <div className="hours-item">
                <Clock size={18} />
                <div>
                  <p className="hours-label">Mon - Fri</p>
                  <p className="hours-time">{contactInfo.hours.weekdays}</p>
                </div>
              </div>
              <div className="hours-item">
                <Clock size={18} />
                <div>
                  <p className="hours-label">Sat - Sun</p>
                  <p className="hours-time">{contactInfo.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ToTo Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
