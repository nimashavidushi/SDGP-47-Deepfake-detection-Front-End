import React, { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:3005/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        setResponse(data);
      } else {
        console.log("Error uploading file");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileInput} />
        <button type="submit">Upload and Scan</button>
      </form>
      {response && <p>Received response: {response}</p>}
    </div>
  );
}

export default FileUploader;
