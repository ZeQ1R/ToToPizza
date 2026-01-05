import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - save to localStorage
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const newReservation = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    reservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    toast.success('Reservation Submitted!', {
      description: `Thank you ${formData.name}! We'll confirm your booking shortly.`
    });

    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  return (
    <div className="page-reservations">
      <section className="reservations-hero">
        <motion.div 
          className="reservations-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Book a Table</h1>
          <p className="page-subtitle">
            Reserve your spot and get ready for an unforgettable Italian dining experience
          </p>
        </motion.div>
      </section>

      <section className="reservations-content">
        <div className="reservations-container">
          <motion.div 
            className="reservation-info"
            {...fadeInUp}
          >
            <h2 className="section-title">Plan Your Visit</h2>
            <p className="info-text">
              We recommend booking in advance, especially for weekends and special occasions.
              Our friendly staff will ensure you have the perfect table for your party.
            </p>
            <motion.div 
              className="info-cards"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div 
                className="info-card"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar size={28} />
                <div>
                  <h4>Flexible Dates</h4>
                  <p>Available 7 days a week</p>
                </div>
              </motion.div>
              <motion.div 
                className="info-card"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Clock size={28} />
                <div>
                  <h4>Perfect Timing</h4>
                  <p>Lunch & dinner service</p>
                </div>
              </motion.div>
              <motion.div 
                className="info-card"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Users size={28} />
                <div>
                  <h4>Any Group Size</h4>
                  <p>From couples to parties</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="reservation-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="reservation-form">
              <h3 className="form-title">Reservation Details</h3>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+389 XX XXX XXX"
                />
              </motion.div>

              <motion.div 
                className="form-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </motion.div>

              <motion.button 
                type="submit" 
                className="btn-primary full-width"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Confirm Reservation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
