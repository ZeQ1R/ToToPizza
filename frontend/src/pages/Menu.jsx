import React from 'react';
import { motion } from 'framer-motion';
import { menuData } from '../mock';
import { Pizza, Soup, UtensilsCrossed, Coffee, IceCream } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Menu = () => {
  const categories = [
    {
      title: 'Starters',
      icon: <Soup size={32} />,
      items: menuData.starters
    },
    {
      title: 'Pizzas',
      icon: <Pizza size={32} />,
      items: menuData.pizzas
    },
    {
      title: 'Pasta',
      icon: <UtensilsCrossed size={32} />,
      items: menuData.pasta
    },
    {
      title: 'Desserts',
      icon: <IceCream size={32} />,
      items: menuData.desserts
    },
    {
      title: 'Drinks',
      icon: <Coffee size={32} />,
      items: menuData.drinks
    }
  ];

  return (
    <div className="page-menu">
      <section className="menu-hero">
        <motion.div 
          className="menu-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Discover our selection of authentic Italian dishes, made fresh daily with love
          </p>
        </motion.div>
      </section>

      <section className="menu-content">
        <div className="menu-container">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="menu-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <motion.div 
                className="category-header"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="category-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h2 className="category-title">{category.title}</h2>
              </motion.div>
              <motion.div 
                className="menu-items"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.items.map((item) => (
                  <motion.div 
                    key={item.id} 
                    className="menu-item"
                    variants={fadeInUp}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.02,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="menu-showcase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="menu-showcase-grid">
          <motion.div 
            className="showcase-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1649688423692-308d2fc1027d" 
              alt="Margherita Pizza"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="showcase-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1764586119076-61711e8ed25a" 
              alt="Pasta Carbonara"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="showcase-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1732869931523-8fd0437da0f1" 
              alt="Tiramisu"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Menu;
