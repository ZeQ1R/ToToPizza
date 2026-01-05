import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, UtensilsCrossed, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-home">
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Taste the Authentic
            <span className="hero-highlight"> Italian Experience</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to ToTo Pizza - where tradition meets flavor in the heart of Tetovo
          </p>
          <div className="hero-cta">
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/reservations" className="btn-secondary">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <ChefHat size={40} />
            </div>
            <h3 className="feature-title">Expert Chefs</h3>
            <p className="feature-text">
              Our skilled chefs bring authentic Italian recipes to your table with passion and expertise
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <UtensilsCrossed size={40} />
            </div>
            <h3 className="feature-title">Fresh Ingredients</h3>
            <p className="feature-text">
              We use only the finest, locally-sourced ingredients to create unforgettable flavors
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart size={40} />
            </div>
            <h3 className="feature-title">Made with Love</h3>
            <p className="feature-text">
              Every dish is prepared with care and dedication to bring you the best dining experience
            </p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-container">
          <h2 className="section-title">Welcome to ToTo Pizza</h2>
          <p className="intro-text">
            At ToTo Pizza, we believe that great food brings people together. Located in the
            vibrant city of Tetovo, we serve authentic Italian cuisine that celebrates the rich
            traditions of Italy while embracing the warm hospitality of North Macedonia.
          </p>
          <p className="intro-text">
            Whether you're craving a perfectly crafted pizza from our wood-fired oven, homemade
            pasta, or a delightful Italian dessert, we have something special waiting for you.
            Join us for an unforgettable dining experience!
          </p>
          <Link to="/about" className="btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
