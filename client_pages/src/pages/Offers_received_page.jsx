// OffersReceivedPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { offers } from "../data/offers";

const OffersReceivedPage = () => {
  const navigate = useNavigate();

  const handleOfferClick = (offerId) => {
    navigate(`/client-job/${offerId}`);
  };

  return (
    <div className="min-h-screen bg-gray-500 w-screen">
      <Header />
      <h1 className="">Offers Received</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="mb-4 border border-gray-300 p-4 rounded-lg bg-333"
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