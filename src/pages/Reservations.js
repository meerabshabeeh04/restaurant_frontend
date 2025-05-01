import React, { useState } from 'react';
import axios from 'axios';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post('https://restaurant-backend-qyn7.onrender.com/api/reserve/', formData);
      setFormSuccess(true);
      setFormData({
        name: '',
        email: '',
        guests: '',
        date: '',
        time: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reservations-container">
      <div className="reservations-hero">
        <div className="reservations-overlay"></div>
        <div className="reservations-hero-content">
          <h1>Book Your Table</h1>
          <div className="decorative-line"></div>
          <p>Reserve your culinary experience at Spice Fusion</p>
        </div>
      </div>
      
      <div className="container reservation-form-section">
        <div className="row">
          <div className="col-lg-6 reservation-info">
            <h2>Dining Hours</h2>
            <div className="decorative-line"></div>
            <div className="timing-grid">
              <div className="day">Monday - Thursday</div>
              <div className="hours">11:30 AM - 12:30 AM</div>
              
              <div className="day">Friday - Saturday</div>
              <div className="hours">11:30 AM - 12:30 AM</div>
              
              <div className="day">Sunday</div>
              <div className="hours">12:00 PM - 2:00 AM</div>
            </div>
            
            <h2 className="mt-5">Contact Information</h2>
            <div className="decorative-line"></div>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> (021) 122 111 122</p>
              <p><i className="fas fa-map-marker-alt"></i> Do Darya, Abdul Sattar Edhi Ave, D.H.A. Phase 8 Zone C Phase 8 Defence Housing Authority, Karachi, 75500</p>
              <p><i className="fas fa-envelope"></i> reservations@spicefusion.com</p>
            </div>
            
            <div className="special-note">
              <h3>Special Requests?</h3>
              <p>For large groups, private events, or special dietary requirements, please contact us directly by phone.</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="reservation-form-container">
              <h2>Make a Reservation</h2>
              <div className="decorative-line"></div>
              
              {formSuccess ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Reservation Confirmed!</h3>
                  <p>We look forward to serving you at Spice Fusion. A confirmation has been sent to your email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      id="name"
                      name="name" 
                      placeholder="Your Name"
                      value={formData.name} 
                      onChange={handleChange} 
                      required
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input 
                      type="email" 
                      className="form-control custom-input" 
                      id="email"
                      name="email" 
                      placeholder="Your Email"
                      value={formData.email} 
                      onChange={handleChange} 
                      required
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input 
                          type="number" 
                          className="form-control custom-input" 
                          id="guests"
                          name="guests" 
                          placeholder="Number of Guests"
                          value={formData.guests} 
                          onChange={handleChange} 
                          required 
                          min="1" 
                          max="20"
                        />
                        <label htmlFor="guests">Guests</label>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input 
                          type="date" 
                          className="form-control custom-input" 
                          id="date"
                          name="date" 
                          value={formData.date} 
                          onChange={handleChange} 
                          required
                        />
                        <label htmlFor="date">Date</label>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input 
                          type="time" 
                          className="form-control custom-input" 
                          id="time"
                          name="time" 
                          value={formData.time} 
                          onChange={handleChange} 
                          required
                        />
                        <label htmlFor="time">Time</label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="reserve-button" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="reservation-policy-section">
        <div className="container">
          <h2 className="text-center">Reservation Policy</h2>
          <div className="decorative-line mx-auto"></div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Arrival Time</h3>
                <p>Please arrive within 15 minutes of your reservation time. Tables may be released after this grace period.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fas fa-ban"></i>
                </div>
                <h3>Cancellation</h3>
                <p>Kindly cancel at least 4 hours in advance. No-shows may affect future reservation privileges.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Large Parties</h3>
                <p>For parties of 8 or more, please contact us directly to arrange your reservation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;