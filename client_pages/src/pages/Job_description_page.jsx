// JobDescriptionPage.js
import React, { useState } from "react";
import Header from "../components/header"; // Add this import

const JobDescriptionPage = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [site, setSite] = useState("");
  const [time, setTime] = useState("");
  const [mainPhoto, setMainPhoto] = useState(null);
  const [otherFiles, setOtherFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or send the form data to a backend service.
    console.log({
      jobDescription,
      site,
      time,
      mainPhoto,
      otherFiles,
    });
  };

  const handleMainPhotoChange = (e) => {
    const file = e.target.files[0];
    setMainPhoto(file);
  };

  const handleOtherFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setOtherFiles(files);
  };

  return (
    <div>
      <Header /> {/* Add the header here */}
      <h1>Job Description</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Description:</label>
          <br />
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Describe the job..."
            rows={5}
            style={{ width: "100vw" }}
          />
        </div>

        <div>
          <label>Site:</label>
          <br />
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="Enter site location..."
          />
        </div>

        <div>
          <label>Time:</label>
          <br />
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label>Main Photo:</label>
          <br />
          <input type="file" accept="image/*" onChange={handleMainPhotoChange} />
        </div>

        <div>
          <label>Other Documents (photos, videos, docs):</label>
          <br />
          <input
            type="file"
            accept="image/*,video/*,application/pdf"
            multiple
            onChange={handleOtherFilesChange}
          />
        </div>

        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default JobDescriptionPage;