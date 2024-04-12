import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { carData } from './Components/Cars_data';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addCount = () => {
    setCartCount(cartCount + 1);
  };

  const resetCount = () => {
    setCartCount(0);
  };

  return (
    <div >
      <Header  cartCount={cartCount} resetCount={resetCount} />

      <div className="container">
        <div className="row">
          {carData.map((car) => (
            <Footer key={car.id} car={car} addCount={addCount} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;