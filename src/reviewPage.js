import React from "react";
import "./reviewPage.css";
import { Link } from "react-router-dom";

function reviewPg() {
  return (
    <div className="reviewContainer">
      <header>
        <h1>DeepZeroX</h1>
        <nav className="nav-buttons">
          <ul>
            <li>
            <Link to="/"><button className="home-button">Home</button></Link>
            </li>
            <li>
            <Link to="/UseScannerPg"><button className="scanner-button">Scanner</button></Link>
            </li>
            <li>
            <Link to="/reviewPg"><button className="review-button">Review</button></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="reviewPgMain">
        <form className="form">
          <label>
            First Name:
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Review:
            <textarea className="review"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default reviewPg;