import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactInfo } from '../mock';

const Contact = () => {
  return (
    <div className="page-contact">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have a question or want to know more? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2 className="section-title">Visit Us</h2>
            <p className="contact-intro">
              Stop by our restaurant in Tetovo or reach out to us through any of the channels below.
              Our team is always ready to assist you!
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={32} />
                </div>
                <h3 className="contact-card-title">Location</h3>
                <p className="contact-card-text">{contactInfo.address}</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={32} />
                </div>
                <h3 className="contact-card-title">Phone</h3>
                <p className="contact-card-text">{contactInfo.phone}</p>
                <p className="contact-card-subtext">Call us for reservations</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={32} />
                </div>
                <h3 className="contact-card-title">Email</h3>
                <p className="contact-card-text">{contactInfo.email}</p>
                <p className="contact-card-subtext">We'll respond within 24 hours</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={32} />
                </div>
                <h3 className="contact-card-title">Opening Hours</h3>
                <div className="hours-list">
                  <p className="contact-card-text">
                    <strong>Mon - Fri:</strong><br />
                    {contactInfo.hours.weekdays}
                  </p>
                  <p className="contact-card-text">
                    <strong>Sat - Sun:</strong><br />
                    {contactInfo.hours.weekends}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2 className="section-title">Find Us on the Map</h2>
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">{contactInfo.address}</p>
            </div>
          </div>

          <div className="closing-message">
            <p>
              We look forward to serving you at ToTo Pizza! Whether you're stopping by for a quick
              lunch or planning a special dinner, our doors are always open to welcome you with
              warm hospitality and delicious food.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
