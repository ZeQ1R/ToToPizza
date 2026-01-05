import React, { useState } from 'react';
import { galleryImages } from '../mock';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="page-gallery">
      <section className="gallery-hero">
        <div className="gallery-hero-container">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">
            Take a visual journey through our delicious dishes and warm atmosphere
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="gallery-container">
          <div className="gallery-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'food' ? 'active' : ''}`}
              onClick={() => setFilter('food')}
            >
              Food
            </button>
            <button
              className={`filter-btn ${filter === 'ambiance' ? 'active' : ''}`}
              onClick={() => setFilter('ambiance')}
            >
              Ambiance
            </button>
            <button
              className={`filter-btn ${filter === 'kitchen' ? 'active' : ''}`}
              onClick={() => setFilter('kitchen')}
            >
              Kitchen
            </button>
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-placeholder">
                  <span className="placeholder-text">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
