import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../mock';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="page-gallery">
      <section className="gallery-hero">
        <motion.div 
          className="gallery-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">
            Take a visual journey through our delicious dishes and warm atmosphere
          </p>
        </motion.div>
      </section>

      <section className="gallery-content">
        <div className="gallery-container">
          <motion.div 
            className="gallery-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['all', 'food', 'ambiance', 'kitchen'].map((filterOption, index) => (
              <motion.button
                key={filterOption}
                className={`filter-btn ${filter === filterOption ? 'active' : ''}`}
                onClick={() => setFilter(filterOption)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="gallery-grid"
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredImages.map((image, index) => (
                <motion.div 
                  key={image.id}
                  className="gallery-item"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="gallery-item-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="gallery-item-title">{image.title}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
