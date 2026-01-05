import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactInfo } from '../mock';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Contact = () => {
  return (
    <div className="page-contact">
      <section className="contact-hero">
        <motion.div 
          className="contact-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have a question or want to know more? We'd love to hear from you!
          </p>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <motion.div 
            className="contact-info-section"
            {...fadeInUp}
          >
            <h2 className="section-title">Visit Us</h2>
            <p className="contact-intro">
              Stop by our restaurant in Tetovo or reach out to us through any of the channels below.
              Our team is always ready to assist you!
            </p>

            <motion.div 
              className="contact-cards"
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div 
                className="contact-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin size={32} />
                </motion.div>
                <h3 className="contact-card-title">Location</h3>
                <p className="contact-card-text">{contactInfo.address}</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone size={32} />
                </motion.div>
                <h3 className="contact-card-title">Phone</h3>
                <p className="contact-card-text">{contactInfo.phone}</p>
                <p className="contact-card-subtext">Call us for reservations</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail size={32} />
                </motion.div>
                <h3 className="contact-card-title">Email</h3>
                <p className="contact-card-text">{contactInfo.email}</p>
                <p className="contact-card-subtext">We'll respond within 24 hours</p>
              </motion.div>

              <motion.div 
                className="contact-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Clock size={32} />
                </motion.div>
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
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="map-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="section-title">Find Us on the Map</h2>
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">{contactInfo.address}</p>
            </div>
          </motion.div>

          <motion.div 
            className="closing-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              We look forward to serving you at ToTo Pizza! Whether you're stopping by for a quick
              lunch or planning a special dinner, our doors are always open to welcome you with
              warm hospitality and delicious food.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
