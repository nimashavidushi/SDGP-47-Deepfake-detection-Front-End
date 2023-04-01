import React, { useState } from "react";
import "./scannerPage.css";
import { Link } from "react-router-dom";

function useScannerPg() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoLink, setVideoLink] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleLinkInput = (e) => {
    setVideoLink(e.target.value);
  };

  const handleUpload = () => {
    if (videoFile || videoLink) {
      // upload video file or link to server
    }
  };

  return (
    <div className="container">
      <header>
        <h1>DeepZeroX</h1>
        <nav>
          <ul>
            <li>
            <Link to="/"><button className="home-button">Home</button></Link>
            </li>
            <li>
            <Link to="/useScannerPg"><button className="scanner-button">Scanner</button></Link>
            </li>
            <li>
            <Link to="/reviewPg"><button className="review-button">Review</button></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="scannerPgMain">
        {/* <h2>Scan deepfake videos quickly and easily</h2> */}
        <div className="dropzone">
          <div className="upload-form">
            <input type="file" onChange={handleFileUpload} />
            <input type="text" placeholder="Enter video link" onChange={handleLinkInput} />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default useScannerPg;