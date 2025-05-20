import React, { useEffect, useState } from "react";

const mockJobs = [
  {
    id: 1,
    title: "Fix leaky sink",
    description: "Client in Westlands needs urgent plumbing help.",
    budget: "KSh 2,000",
  },
  {
    id: 2,
    title: "Paint a 2-bedroom house",
    description: "Interior painting job. Materials provided.",
    budget: "KSh 15,000",
  },
  {
    id: 3,
    title: "12 floors building",
    description: "Building the building from ground Up.Looking for qualified Constructor who can handle this project",
    budget: "KSh 223M",
  },
  {
    id: 3,
    title: "Electrical installation",
    description: "Install sockets and lighting for a small office.",
    budget: "KSh 10,000",
    skills: ["electrical"],
  },
];

export default function UserDashboard() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setJobs(mockJobs);
      setFilteredJobs(mockJobs);
    }, 500);
  }, []);

  useEffect(() => {
    let result = [...jobs];

    // Filter by search
    if (searchTerm) {
      result = result.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by filter
    if (filter === "recent") {
      result = result.reverse(); // Just reversing mock for demo
    }

    setFilteredJobs(result);
  }, [searchTerm, filter, jobs]);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT: Job Feed */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full mb-4 px-4 py-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All Jobs
          </button>
          <button
            className={`px-3 py-1 rounded ${
              filter === "relevant" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("relevant")}
          >
            Most Relevant
          </button>
          <button
            className={`px-3 py-1 rounded ${
              filter === "recent" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("recent")}
          >
            Most Recent
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 gap-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <p className="text-green-600 mt-2 font-medium">Budget: {job.budget}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Dashboard Info */}
      <div className="md:w-2/3 w-full mt-6 md:mt-0 ml-auto">
        <div className="sticky top-20 flex flex-col gap-4">
          {/* Completed Jobs */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">✅ Completed Jobs</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Ceiling Fan Installation - KSh 4,000</li>
              <li>Tile Repair - KSh 6,000</li>
            </ul>
          </div>

          {/* Paid Jobs */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">💰 Paid Jobs</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Furniture Assembly - Paid</li>
              <li>Fence Painting - Paid</li>
            </ul>
          </div>

          {/* Pending Applications */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">⏳ Pending Applications</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Electrical Work - Awaiting reply</li>
              <li>Water Tank Cleaning - Under review</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
