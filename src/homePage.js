import React from "react";
import "./homePage.css"; // import the CSS file
import { Link } from "react-router-dom";

// Import images


// Define the App component
function homePg() {
  return (
    <div>
      <header>
        <h1>DeepZeroX</h1>
        <Link to="/reviewPg"><button className="review-button">Review</button></Link>
        
      </header>
      <main className="homePgMain">
        <h2>Scan deepfake videos quickly and easily</h2>
        <Link to="/useScannerPg"><button className="scanner-button">Scanner</button></Link>
       
      </main>
      <footer>
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            libero orci. Integer lacinia scelerisque felis non interdum. Donec
            vel felis in diam finibus lobortis.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default homePg;



