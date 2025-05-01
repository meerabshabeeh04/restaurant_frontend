import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../api/api';
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    setIsLoading(true);
    fetchMenuItems()
      .then((response) => {
        console.log("Menu items loaded:", response.data);
        setMenuItems(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
        setIsLoading(false);
      });
  }, []);

  // Function to handle "Add to Order" button click
  const handleAddToOrder = () => {
    setNotification({
      show: true,
      message: "This feature is not available yet. Our online ordering system is currently under development."
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  // Extract unique categories from menu items
  const categories = menuItems.length > 0 
    ? ['all', ...new Set(menuItems.map(item => item.category || 'uncategorized'))]
    : ['all'];

  // Filter menu items based on selected category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Notification */}
      {notification.show && (
        <div className="notification-message">
          {notification.message}
        </div>
      )}
      
      {/* Hero Section */}
      <div className="menu-hero">
        <div className="menu-overlay"></div>
        <div className="menu-hero-content">
          <h1>Our Culinary Offerings</h1>
          <div className="decorative-line"></div>
          <p>Discover a fusion of flavors crafted with passion and precision</p>
        </div>
      </div>

      <div className="container menu-container">
        {/* Category Navigation */}
        <div className="category-nav">
          {categories.map(category => (
            <button 
              key={category} 
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {isLoading ? (
          <div className="text-center my-5">
            <div className="spinner"></div>
            <p className="mt-3">Loading our delicious menu...</p>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-price">Rs. {item.price}</div>
                  </div>
                  <div className="item-description">{item.description}</div>
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="dietary-tags">
                      {item.dietary.includes('vegetarian') && <span className="dietary vegetarian">V</span>}
                      {item.dietary.includes('vegan') && <span className="dietary vegan">VG</span>}
                      {item.dietary.includes('gluten-free') && <span className="dietary gluten-free">GF</span>}
                      {item.dietary.includes('spicy') && <span className="dietary spicy">🌶️</span>}
                    </div>
                  )}
                  <button className="order-btn" onClick={handleAddToOrder}>Add to Order</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="no-items-message">
            <p>No items found in this category. Please try another category.</p>
          </div>
        )}
        
        {/* Chef's Note Section */}
        <div className="chefs-note">
          <div className="chefs-note-content">
            <h2>A Note From Our Chef</h2>
            <div className="decorative-line"></div>
            <p>
              At Spice Fusion, we believe in sourcing only the finest ingredients. Our produce is locally sourced, 
              our spices are imported from regions known for their distinctive flavors, and our recipes have been 
              perfected over generations. Each dish tells a story of tradition and innovation.
            </p>
            <div className="chef-signature">Chef Muhammad Faizan Khan</div>
          </div>
        </div>

        {/* Menu Legend */}
        <div className="menu-legend">
          <h3>Dietary Guide</h3>
          <div className="legend-items">
            <div className="legend-item">
              <span className="dietary vegetarian">V</span>
              <span>Vegetarian</span>
            </div>
            <div className="legend-item">
              <span className="dietary vegan">VG</span>
              <span>Vegan</span>
            </div>
            <div className="legend-item">
              <span className="dietary gluten-free">GF</span>
              <span>Gluten Free</span>
            </div>
            <div className="legend-item">
              <span className="dietary spicy">🌶️</span>
              <span>Spicy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;