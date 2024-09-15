import React, { useState } from 'react';

const TravelCard = ({ destination, features, image }) => {
  const [scale, setScale] = useState(1); 

  const toggleLike = () => {
    setScale(prevScale => prevScale + 0.2); 
  };

  const resetHeart = () => {
    setScale(1); 
  };

  return (
    <div className="card m-5">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={destination} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{destination}</p>
          </div>
        </div>

        <div className="content">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        <span className="card-footer-item">
          <button onClick={toggleLike} className="button is-light">
            <span
              className="icon is-large"
              style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
            >
              ❤️
            </span>
          </button>
        </span>
        <span className="card-footer-item">
          <button onClick={resetHeart} className="button is-light">
            Reset
          </button>
        </span>
      </footer>
    </div>
  );
};

export default TravelCard;
