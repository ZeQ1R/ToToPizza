import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Reservations = () => {
  const { toast } = useToast();
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

    toast({
      title: "Reservation Submitted!",
      description: `Thank you ${formData.name}! We'll confirm your booking shortly.`,
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
        <div className="reservations-hero-container">
          <h1 className="page-title">Book a Table</h1>
          <p className="page-subtitle">
            Reserve your spot and get ready for an unforgettable Italian dining experience
          </p>
        </div>
      </section>

      <section className="reservations-content">
        <div className="reservations-container">
          <div className="reservation-info">
            <h2 className="section-title">Plan Your Visit</h2>
            <p className="info-text">
              We recommend booking in advance, especially for weekends and special occasions.
              Our friendly staff will ensure you have the perfect table for your party.
            </p>
            <div className="info-cards">
              <div className="info-card">
                <Calendar size={28} />
                <div>
                  <h4>Flexible Dates</h4>
                  <p>Available 7 days a week</p>
                </div>
              </div>
              <div className="info-card">
                <Clock size={28} />
                <div>
                  <h4>Perfect Timing</h4>
                  <p>Lunch & dinner service</p>
                </div>
              </div>
              <div className="info-card">
                <Users size={28} />
                <div>
                  <h4>Any Group Size</h4>
                  <p>From couples to parties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reservation-form-wrapper">
            <form onSubmit={handleSubmit} className="reservation-form">
              <h3 className="form-title">Reservation Details</h3>
              
              <div className="form-group">
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
              </div>

              <div className="form-group">
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
              </div>

              <div className="form-row">
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
              </div>

              <div className="form-group">
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
              </div>

              <button type="submit" className="btn-primary full-width">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
