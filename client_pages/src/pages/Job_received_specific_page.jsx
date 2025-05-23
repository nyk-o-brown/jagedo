// ClientJobSpecificPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { offers } from "../data/offers";

const ClientJobSpecificPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const offerDetail = offers.find((offer) => offer.id === id);

  if (!offerDetail) {
    return (
      <div className="min-h-screen bg-gray-500 w-screen">
        <Header />
        <h1>Offer Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-500 w-screen">
      <Header />
      <h1>Bid Details</h1>
      <div className="border border-gray-300 p-8 mt-4 rounded-lg bg-white text-black">
        <h2>{offerDetail.name}</h2>
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
          <button onClick={() => alert("You have accepted this bid")} style={{ marginRight: "1rem" ,background:"white",}}>Accept Bid</button>
          <button  onClick={() => navigate("/offers")} style={{background:"white",border:"black"}}>Decline Bid</button>
        </div>
      </div>
    </div>
  );
};

export default ClientJobSpecificPage;