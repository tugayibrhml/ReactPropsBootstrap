
import React from 'react';

function Header({ cartCount, resetCount }) {
  return (
    <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center" style={{position: 'sticky', zIndex:1000, top: 0, height:60}}>
      <h1> <a href="#"  style={{color:'wheat',  textDecoration: 'none'}}> TurboAze</a></h1>
      <div>
        <span className="text-warning me-3 " style={{fontSize: 20}}>Cart: {cartCount}</span>
        <button className="btn btn-danger" onClick={resetCount} style={{fontSize: 20}}>Reset</button>
      </div>
    </div>
  );
}

export default Header;
