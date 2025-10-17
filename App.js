import React, { useState } from "react";
import "./styles.css";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "Past the App Key";

export default function App() {
  const [urls, setUrls] = useState([]);

  function handleSuccess(files) {
    const links = files.map(file => file.link);
    setUrls(links);
    console.log("Selected files:", links);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Choose Files From Dropbox</h1>

      <div className="container" style={{ textAlign: "center", marginTop: "20px" }}>
        <DropboxChooser
          appKey={APP_KEY}
          success={handleSuccess}
          cancel={() => console.log("Dropbox chooser closed")}
          multiselect={true}
        >
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Choose from Dropbox
          </button>
        </DropboxChooser>

        <br /><br />

        <div className="preview" style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
          {urls.map((link, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={link}
                alt={`File ${index + 1}`}
                width="200"
                height="200"
                style={{ objectFit: "cover", border: "1px solid #ccc", borderRadius: "8px" }}
              />
              <p style={{ maxWidth: "200px", wordWrap: "break-word" }}>File {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
