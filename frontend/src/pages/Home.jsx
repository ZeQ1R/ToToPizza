import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, UtensilsCrossed, Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.2 },
};

const staggerChildren = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const Home = () => {
  return (
    <div className="page-home">
      <section className="hero-section hero-with-image">
        <div className="hero-image-overlay"></div>
        <motion.div 
          className="hero-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Taste the Authentic
            <span className="hero-highlight"> Italian Experience</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to ToTo Pizza - where tradition meets flavor in the heart of Tetovo
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/reservations" className="btn-secondary">
              Book a Table
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="features-section">
        <motion.div 
          className="features-container"
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="feature-card" variants={fadeInUp}>
            <motion.div 
              className="feature-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ChefHat size={40} />
            </motion.div>
            <h3 className="feature-title">Expert Chefs</h3>
            <p className="feature-text">
              Our skilled chefs bring authentic Italian recipes to your table with passion and expertise
            </p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInUp}>
            <motion.div 
              className="feature-icon"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <UtensilsCrossed size={40} />
            </motion.div>
            <h3 className="feature-title">Fresh Ingredients</h3>
            <p className="feature-text">
              We use only the finest, locally-sourced ingredients to create unforgettable flavors
            </p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInUp}>
            <motion.div 
              className="feature-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart size={40} />
            </motion.div>
            <h3 className="feature-title">Made with Love</h3>
            <p className="feature-text">
              Every dish is prepared with care and dedication to bring you the best dining experience
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="intro-section">
        <motion.div 
          className="intro-container"
          {...fadeInUp}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome to ToTo Pizza
          </motion.h2>
          <motion.p 
            className="intro-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At ToTo Pizza, we believe that great food brings people together. Located in the
            vibrant city of Tetovo, we serve authentic Italian cuisine that celebrates the rich
            traditions of Italy while embracing the warm hospitality of North Macedonia.
          </motion.p>
          <motion.p 
            className="intro-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Whether you're craving a perfectly crafted pizza from our wood-fired oven, homemade
            pasta, or a delightful Italian dessert, we have something special waiting for you.
            Join us for an unforgettable dining experience!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        className="showcase-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="showcase-grid">
          <motion.div 
            className="showcase-item large"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1680405620826-83b0f0f61b28" 
              alt="Delicious Pizza"
              loading="lazy"
            />
            <div className="showcase-overlay">
              <h3>Our Signature Pizzas</h3>
            </div>
          </motion.div>
          <motion.div 
            className="showcase-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1735640268811-9c614c08b0dc" 
              alt="Fresh Pasta"
              loading="lazy"
            />
            <div className="showcase-overlay">
              <h3>Homemade Pasta</h3>
            </div>
          </motion.div>
          <motion.div 
            className="showcase-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1553683315-dbc11cde81ad" 
              alt="Tiramisu Dessert"
              loading="lazy"
            />
            <div className="showcase-overlay">
              <h3>Authentic Desserts</h3>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
