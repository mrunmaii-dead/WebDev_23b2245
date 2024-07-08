import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <h2>Look Around!</h2>
      <div className = "links">
       
          <a href ="/">Home Page</a>
          <a href = "/overview">Game Overview</a>
          <a href = "/highlights">Game Highlights</a>
          <a href = "/started"> ?</a>
        
        {/* Add more links as needed */}
        </div>
    </nav>
  );
}

export default Navbar;
