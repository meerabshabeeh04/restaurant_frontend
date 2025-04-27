import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../api/api';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems().then((response) => {
      setMenuItems(response.data);
    });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 fw-bold">Our Menu</h1>
      <div className="row">
        {menuItems.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-success">${item.price}</h6>
                <p className="card-text">{item.description}</p>
                {/* optional button */}
                <button className="btn btn-outline-primary mt-auto">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
