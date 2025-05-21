// ClientJobSpecificPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header"; // Adjust the import path as necessary

const ClientJobSpecificPage = () => {
  const { id } = useParams();

  // Dummy data for demonstration. In practice, fetch job/offer details based on the offer id.
  const offerDetail = {
    id,
    workerName: "Worker One",
    rating: 4.5,
    certifications: ["Certification A", "Certification B"],
    jobsCompleted: 25,
    message: "I have extensive experience with similar jobs and will deliver quality work.",
    jobDescription: "Fix the electrical issues at the site and complete the repair tasks.",
    status: "interested",
  };

  const handleAccept = () => {
    // Process the action to accept the bid.
    alert("Bid accepted!");
  };

  const handleDecline = () => {
    // Process the action to decline the bid.
    alert("Bid declined!");
  };

  return (
    <div>
        <Header /> {/* Add the header here */}
      <h1>Client Job Specific Details</h1>
      <div style={{ border: "1px solid #ddd", padding: "1rem" }}>
        <h2>{offerDetail.workerName}</h2>
        <p>Rating: {offerDetail.rating}</p>
        <p>Certifications: {offerDetail.certifications.join(", ")}</p>
        <p>Jobs Completed: {offerDetail.jobsCompleted}</p>
        <p>Message: {offerDetail.message}</p>
        <p>Job Description: {offerDetail.jobDescription}</p>
        <p>
          Status:{" "}
          <span style={{ color: offerDetail.status === "accepted" ? "green" : "orange" }}>
            {offerDetail.status.charAt(0).toUpperCase() + offerDetail.status.slice(1)}
          </span>
        </p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={handleAccept} style={{ marginRight: "1rem" }}>
            Accept Bid
          </button>
          <button onClick={handleDecline}>Decline Bid</button>
        </div>
      </div>
    </div>
  );
};

export default ClientJobSpecificPage;