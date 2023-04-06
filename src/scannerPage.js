import React, { useState } from "react";
import "./scannerPage.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUploader from './FileUploader';

function useScannerPg() {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileUpload = (file) => {
    setVideoFile(file);
  };

/*   const handleUpload = () => {
    if (videoFile) {
      // upload video file to server
    }
  }; */

  return (
    <div className="container">
      <header className="row">
        <div className="col">
          <h1>DeepZeroX</h1>
        </div>
        <div className="col">
          <nav>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/">
                  <button className="btn btn-primary">Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/useScannerPg">
                  <button className="btn btn-primary">Scanner</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviewPg">
                  <button className="btn btn-primary">Review</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="row">
        <div className="col">
          <div className="dropzone">
            <FileUploader onFileUpload={handleFileUpload} />
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default useScannerPg;
