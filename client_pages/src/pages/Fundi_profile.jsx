// src/WorkerProfile.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/header";

const FundiProfile = () => {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    fetch("/data/workers.json")
      .then((response) => response.json())
      .then((data) => {
        // For demonstration, randomly choose a worker from the list.
        const randomIndex = Math.floor(Math.random() * data.length);
        setWorker(data[randomIndex]);
      })
      .catch((error) => console.error("Error fetching worker data:", error));
  }, []);

  if (!worker) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Header />
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-screen">
      <Header />
      <div className="flex items-center justify-center ">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
          {/* Left Section – Profile Information */}
          <div className="md:w-1/3 p-6 border-r">
            <img
              src={worker.profilePicture}
              alt={worker.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h1 className="text-2xl font-bold text-center mt-4">
              {worker.name}
            </h1>
            <p className="text-yellow-500 text-center mt-2">
              Rating: {worker.rating} / 5
            </p>
            <p className="text-gray-600 text-center mt-2">{worker.description}</p>
            <div className="mt-4 text-center">
              <p className="font-semibold">
                Jobs Completed: {worker.totalJobs}
              </p>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Certificates:</h2>
              <ul className="list-disc list-inside">
                {worker.certificates.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section – Portfolio */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-xl font-bold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {worker.portfolio.map((item) => (
                <div key={item.id} className="border rounded p-2">
                  <img
                    src={item.image}
                    alt={item.jobDescription}
                    className="w-full h-40 object-cover rounded"
                  />
                  <p className="mt-2 text-sm font-medium">
                    {item.jobDescription}
                  </p>
                  <p className="text-xs text-gray-500">
                    Contact: {item.clientContact}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FundiProfile;