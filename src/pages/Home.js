import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SPICE FUSION</h1>
          <p className="hero-subtitle">Where Tradition Meets Innovation</p>
          <Link to="/reservations" className="reservation-btn">Reserve A Table</Link>        
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container welcome-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">Welcome to Spice Fusion</h2>
            <div className="decorative-line"></div>
            <p className="welcome-text">
              Experience a culinary journey like no other at Spice Fusion. Our chefs blend 
              traditional techniques with innovative cooking methods to create dishes that 
              tantalize your taste buds and leave you craving for more.
            </p>
            <p className="welcome-text">
              Using only the freshest ingredients and authentic spices, we bring you 
              flavors from across the globe in a warm, inviting atmosphere perfect for 
              any occasion.
            </p>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img 
                src="/meal.jpg"
                className="featured-image"
                alt="Signature Dish"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <div className="container">
          <h2 className="text-center featured-title">Our Specialties</h2>
          <div className="decorative-line mx-auto"></div>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="specialty-card">
                <div className="specialty-icon">
                  <i className="fa fa-utensils"></i>
                </div>
                <h3>Signature Dishes</h3>
                <p>Crafted with passion, our signature dishes represent the pinnacle of culinary excellence.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="specialty-card">
                <div className="specialty-icon">
                  <i className="fa fa-glass-cheers"></i>
                </div>
                <h3>Craft Cocktails</h3>
                <p>Our mixologists create perfectly balanced drinks to complement your dining experience.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="specialty-card">
                <div className="specialty-icon">
                  <i className="fa fa-cookie"></i>
                </div>
                <h3>Artisan Desserts</h3>
                <p>Sweet endings that provide the perfect finale to your culinary journey with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="container text-center">
          <h2 className="testimonial-title">What Our Guests Say</h2>
          <div className="decorative-line mx-auto"></div>
          <div className="testimonial-quote">
            <i className="fa fa-quote-left quote-icon"></i>
            <p className="quote-text">Spice Fusion redefines the art of dining. Every bite tells a story of passion and creativity.</p>
            <p className="quote-author">— Meerab Shabeeh, Food Critic</p>
          </div>

          <div className="decorative-line mx-auto"></div>
          <div className="testimonial-quote">
            <i className="fa fa-quote-left quote-icon"></i>
            <p className="quote-text">Spice Fusion is a masterclass in culinary innovation. Every dish is a testament to the chef's bold creativity and dedication to flavor. A truly unforgettable dining experience.</p>
            <p className="quote-author">— Syeda Aiman Naveed, Food Critic</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Experience the Magic of Spice Fusion</h2>
          <p className="cta-text">Join us for an unforgettable dining experience</p>
          <div className="cta-buttons">
            <Link to="/menu" className="cta-btn menu-btn">View Our Menu</Link>          
            <Link to="/reservations" className="cta-btn reservation-btn">Make a Reservation</Link>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;