// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDescriptionPage from "./pages/Job_description_page";
import OffersReceivedPage from "./pages/Offers_received_page";
import ClientJobSpecificPage from "./pages/Job_received_specific_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDescriptionPage />} />
        <Route path="/offers" element={<OffersReceivedPage />} />
        <Route path="/client-job/:id" element={<ClientJobSpecificPage />} />
      </Routes>
    </Router>
  );
}

export default App;