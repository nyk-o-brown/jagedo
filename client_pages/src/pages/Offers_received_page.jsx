// OffersReceivedPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header"; // Adjust the import path as necessary

const OffersReceivedPage = () => {
  const navigate = useNavigate();

  // Dummy data for demonstration. In a real app, you’d fetch this from an API.
  const offers = [
    { id: 1, name: "Worker One", rating: 4.5, status: "interested" },
    { id: 2, name: "Worker Two", rating: 4.0, status: "accepted" },
    { id: 3, name: "Worker Three", rating: 3.8, status: "interested" },
  ];

  const handleOfferClick = (offerId) => {
    // Navigate to the client job specific page.
    navigate(`/client-job/${offerId}`);
  };

  return (
    <div>
        <Header /> {/* Add the header here */}
      <h1>Offers Received</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {offers.map((offer) => (
          <li
            key={offer.id}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ddd",
              padding: "1rem",
            }}
          >
            <h3>{offer.name}</h3>
            <p>Rating: {offer.rating}</p>
            <p>
              Status:{" "}
              <span style={{ color: offer.status === "accepted" ? "green" : "orange" }}>
                {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
              </span>
            </p>
            <button onClick={() => handleOfferClick(offer.id)}>View Offer Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffersReceivedPage;