// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDescriptionPage from "./pages/Job_description_page";
import OffersReceivedPage from "./pages/Offers_received_page";
import ClientJobSpecificPage from "./pages/Job_received_specific_page";
import JobCompletedPage from "./pages/Job_Submitted_Page";
import FundiJobsAvailable from "./Fundi_jobs_available";
import FundiProfile  from "./pages/Fundi_profile"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDescriptionPage />} />
        <Route path="/offers" element={<OffersReceivedPage />} />
        <Route path="/client-job/:id" element={<ClientJobSpecificPage />} />
        <Route path="/client_job" element={<ClientJobSpecificPage />} />
        <Route path="/job_completed" element={<JobCompletedPage />} />
        <Route path="/fundi-jobs" element={<FundiJobsAvailable />} />
        <Route path="/fundi-profile" element={<FundiProfile />} />
      </Routes>
    </Router>
  );
}

export default App;