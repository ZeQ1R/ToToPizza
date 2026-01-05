import React from 'react';
import { Award, Users, Flame } from 'lucide-react';

const About = () => {
  return (
    <div className="page-about">
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="page-title">Our Story</h1>
          <p className="page-subtitle">
            A passion for authentic Italian cuisine in the heart of Tetovo
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-text-section">
            <h2 className="section-title">Welcome to ToTo Pizza</h2>
            <p className="about-paragraph">
              ToTo Pizza was born from a simple dream: to bring the authentic taste of Italy
              to Tetovo. Our journey began with a love for traditional Italian cooking and
              a commitment to using only the freshest, highest-quality ingredients.
            </p>
            <p className="about-paragraph">
              Every day, we wake up with one goal in mind - to serve you food that not only
              tastes incredible but also tells a story. From our hand-tossed pizza dough to
              our homemade pasta sauces, each recipe is crafted with care and respect for
              Italian culinary traditions.
            </p>
            <p className="about-paragraph">
              Our wood-fired oven is the heart of our kitchen, giving our pizzas that perfect
              crispy crust and smoky flavor that you can't get anywhere else. We believe in
              the power of simple, fresh ingredients prepared with skill and passion.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Flame size={36} />
              </div>
              <h3 className="value-title">Authentic Recipes</h3>
              <p className="value-text">
                Traditional Italian recipes passed down through generations, prepared with
                authentic techniques and premium ingredients.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={36} />
              </div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-text">
                We never compromise on quality. From farm-fresh vegetables to imported Italian
                cheeses, we select only the best for our dishes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={36} />
              </div>
              <h3 className="value-title">Community Focus</h3>
              <p className="value-text">
                We're more than a restaurant - we're a gathering place for friends, families,
                and food lovers to create lasting memories.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <h2 className="section-title">Experience the Difference</h2>
            <p className="about-paragraph centered">
              Come visit us and taste why ToTo Pizza has become Tetovo's favorite destination
              for authentic Italian cuisine. We look forward to welcoming you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
