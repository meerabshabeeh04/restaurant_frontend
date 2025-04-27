import React from 'react';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold">Welcome to Our Restaurant</h1>
      <p className="lead">Enjoy delicious meals made with love!</p>
      <img 
        src="/meal.jpg"
        className="img-fluid rounded mt-4 shadow"
        alt="Restaurant"
      />
    </div>
  );
};

export default Home;

