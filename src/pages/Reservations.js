import React, { useState } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://restaurant-backend-qyn7.onrender.com/api/reserve/', formData);
      alert('Reservation successful!');
      setFormData({
        name: '',
        email: '',
        guests: '',
        date: '',
        time: ''
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-4">Book a Table</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Guests</label>
          <input type="number" className="form-control" name="guests" value={formData.guests} onChange={handleChange} required min="1" max="20"/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Time</label>
          <input type="time" className="form-control" name="time" value={formData.time} onChange={handleChange} required/>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Reserve</button>
      </form>
    </div>
  );
};

export default Reservations;

