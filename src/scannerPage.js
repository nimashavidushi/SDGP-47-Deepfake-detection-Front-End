import React, { useState } from "react";
import "./scannerPage.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function useScannerPg() {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleUpload = () => {
    if (videoFile) {
      const formData = new FormData();
      formData.append("video", videoFile);

      fetch("/upload-video", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
            <form className="form-inline">
              <div className="form-group">
                <input type="file" className="form-control-file" onChange={handleFileUpload} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleUpload}>Scan</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default useScannerPg;