// JobDescriptionPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const JobDescriptionPage = () => {
  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState("");
  const [site, setSite] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [mainPhoto, setMainPhoto] = useState(null);
  const [otherFiles, setOtherFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or send the form data to a backend service.
    console.log({
      jobDescription,
      site,
      time,
      duration,
      mainPhoto,
      otherFiles,
    });
    navigate("/job_completed");
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
    <div className="min-h-screen bg-gray-50 w-screen">
      <Header />
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Job Description</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Description box */}
            <div className="flex-1">
              <label className="block font-semibold mb-2">Job Description:</label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Describe the job..."
                rows={8}
                className="w-full border border-gray-300 rounded p-3 resize-none text-black border p-2"
              />
            </div>
            {/* File upload */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <div>
                <label className="block font-semibold mb-2">Main Photo:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainPhotoChange}
                  className="block w-full text-sm text-gray-700
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-500 file:text-white
                    hover:file:bg-green-600"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Other Documents (photos, videos, docs):</label>
                <input
                  type="file"
                  accept="image/*,video/*,application/pdf"
                  multiple
                  onChange={handleOtherFilesChange}
                  className="block w-full text-sm text-gray-700
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-500 file:text-white
                    hover:file:bg-green-600"
                />
              </div>
            </div>
          </div>
          {/* Inputs below description */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-2">Site:</label>
              <input
                type="text"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="Enter site location..."
                className="w-full border border-gray-300 rounded text-black border p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Time:</label>
              <input
                type="date"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-300 rounded  text-black border p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Duration:</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 2 days"
                className="w-full border border-gray-300 rounded  text-black border p-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Submit Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDescriptionPage;