import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Flame } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="page-about">
      <section className="about-hero">
        <motion.div 
          className="about-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Our Story</h1>
          <p className="page-subtitle">
            A passion for authentic Italian cuisine in the heart of Tetovo
          </p>
        </motion.div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <motion.div 
            className="about-text-section"
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
              className="about-paragraph"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ToTo Pizza was born from a simple dream: to bring the authentic taste of Italy
              to Tetovo. Our journey began with a love for traditional Italian cooking and
              a commitment to using only the freshest, highest-quality ingredients.
            </motion.p>
            <motion.p 
              className="about-paragraph"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Every day, we wake up with one goal in mind - to serve you food that not only
              tastes incredible but also tells a story. From our hand-tossed pizza dough to
              our homemade pasta sauces, each recipe is crafted with care and respect for
              Italian culinary traditions.
            </motion.p>
            <motion.p 
              className="about-paragraph"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our wood-fired oven is the heart of our kitchen, giving our pizzas that perfect
              crispy crust and smoky flavor that you can't get anywhere else. We believe in
              the power of simple, fresh ingredients prepared with skill and passion.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-image-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493"
              alt="Wood-fired pizza oven"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div 
            className="values-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Flame size={36} />
              </motion.div>
              <h3 className="value-title">Authentic Recipes</h3>
              <p className="value-text">
                Traditional Italian recipes passed down through generations, prepared with
                authentic techniques and premium ingredients.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award size={36} />
              </motion.div>
              <h3 className="value-title">Quality First</h3>
              <p className="value-text">
                We never compromise on quality. From farm-fresh vegetables to imported Italian
                cheeses, we select only the best for our dishes.
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={36} />
              </motion.div>
              <h3 className="value-title">Community Focus</h3>
              <p className="value-text">
                We're more than a restaurant - we're a gathering place for friends, families,
                and food lovers to create lasting memories.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-cta"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Experience the Difference</h2>
            <p className="about-paragraph centered">
              Come visit us and taste why ToTo Pizza has become Tetovo's favorite destination
              for authentic Italian cuisine. We look forward to welcoming you!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
