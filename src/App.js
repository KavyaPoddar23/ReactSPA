import React from 'react';
import 'bulma/css/bulma.min.css';  
import { destinations } from './destinations'; 
import TravelCard from './TravelCard'; 

const App = () => {
  return (
    <div>
      <header className="hero is-primary">
        <div className="hero-body">
          <p className="title">Explore Travel Destinations</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {destinations.map((destination, index) => (
              <div className="column is-one-third" key={index}>
                
                <TravelCard
                  destination={destination.destination}
                  features={destination.features}
                  image={destination.image}
                />
              
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;