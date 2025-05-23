import React, { useEffect, useState } from "react";
import Header from "../components/header"; // Add this import

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Fix leaky sink",
    description: "Client in Westlands needs urgent plumbing help.",
    budget: "KSh 2,000",
    tags: ["plumbing"]
  },
  {
    id: 2,
    title: "Paint a 2-bedroom house",
    description: "Interior painting job. Materials provided.",
    budget: "KSh 15,000",
    tags: ["painting"]
  },
  {
    id: 3,
    title: "12 floors building",
    description: "Building the building from ground up. Looking for qualified constructor who can handle this project.",
    budget: "KSh 223M",
    tags: ["contracting", "construction"]
  },
  {
    id: 4,
    title: "Electrical installation",
    description: "Install sockets and lighting for a small office.",
    budget: "KSh 10,000",
    tags: ["electrical"]
  }
];

// Mock user skills (used for Most Relevant filter)
const userSkills = ["plumbing", "electrical", "construction"];

export default function FundiJobsAvailable() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyPanel, setShowApplyPanel] = useState(false);

  // Bid form states
  const [fundiPrice, setFundiPrice] = useState("");
  const [bidStatement, setBidStatement] = useState("");
  const [bidSuccess, setBidSuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setJobs(mockJobs);
      setFilteredJobs(mockJobs);
    }, 500);
  }, []);

  useEffect(() => {
    let result = [...jobs];

    if (searchTerm) {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === "relevant") {
      result = result.filter((job) =>
        job.tags?.some((tag) => userSkills.includes(tag.toLowerCase()))
      );
    } else if (filter === "recent") {
      result = result.slice().reverse();
    }

    setFilteredJobs(result);
  }, [searchTerm, filter, jobs]);

  const handleSubmitBid = () => {
    setBidSuccess(true);

    // Simulate form submission, log data
    console.log("Submitting bid:", {
      fundiPrice,
      bidStatement,
      uploadedFiles
    });

    setTimeout(() => {
      setShowApplyPanel(false);
      setBidSuccess(false);
      setFundiPrice("");
      setBidStatement("");
      setUploadedFiles([]); // reset uploaded files
    }, 2000);
  };

  return (
    <>
      
      {/* Main Layout */}
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Feed */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full mb-4 px-4 py-2 border border-black text-black rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex gap-2 mb-4 bg-gray-100 p-2 rounded">
            {["all", "relevant", "recent"].map((type) => (
              <button
                key={type}
                className={`px-3 py-1 rounded ${
                  filter === type ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setFilter(type)}
              >
                {type === "all"
                  ? "All Jobs"
                  : type === "relevant"
                  ? "Most Relevant"
                  : "Most Recent"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-700 mt-2">{job.description}</p>
                <p className="text-green-600 mt-2 font-medium">
                  Budget: {job.budget}
                </p>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => {
                    setSelectedJob(job);
                    setShowApplyPanel(true);
                  }}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:w-2/3 w-full mt-6 md:mt-0 ml-auto">
          <div className="sticky top-20 flex flex-col gap-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">✅ Completed Jobs</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Ceiling Fan Installation - KSh 4,000</li>
                <li>Tile Repair - KSh 6,000</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">💰 Paid Jobs</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Furniture Assembly - Paid</li>
                <li>Fence Painting - Paid</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                ⏳ Pending Applications
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Electrical Work - Awaiting reply</li>
                <li>Water Tank Cleaning - Under review</li>
              </ul>
              <button
                className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold"
                onClick={() => alert("Create a bid for materials and labour")}
              >
                Create a Bid for Materials and Labour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-In Panel */}
      {showApplyPanel && selectedJob && (
        <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Apply for: {selectedJob.title}</h2>
            <button
              onClick={() => setShowApplyPanel(false)}
              className="text-gray-500 hover:text-red-600"
            >
              ✖
            </button>
          </div>

          <p className="mb-2 text-gray-700">{selectedJob.description}</p>
          <p className="mb-4 text-green-700 font-semibold">
            Client Offer: {selectedJob.budget}
          </p>

          <label className="block mb-2 font-medium">Your Price (KSh):</label>
          <input
            type="number"
            value={fundiPrice}
            onChange={(e) => setFundiPrice(e.target.value)}
            className="w-full border border-black text-black px-4 py-2 mb-4 rounded"
            placeholder="e.g. 2200"
          />

          <label className="block mb-2 font-medium">Bid Statement:</label>
          <textarea
            value={bidStatement}
            onChange={(e) => setBidStatement(e.target.value)}
            className="w-full border border-black text-black px-4 py-2 rounded h-28 mb-4"
            placeholder="Explain why you're the right person..."
          />
          <label className="block mb-2 font-medium">Attach Files (optional)</label>
          <input
            type="file"
            multiple
            onChange={(e) =>  setUploadedFiles((prev) => [...prev, ...Array.from(e.target.files)])}
            className="w-full border border-black text-black px-4 py-2 rounded mb-2"
          />

          {uploadedFiles.length > 0 && (
            <ul className="mb-4 text-sm text-gray-700 list-disc pl-5">
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}

          <button
            onClick={handleSubmitBid}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Bid
          </button>

          <button
            onClick={() => setShowApplyPanel(false)}
            className="ml-4 text-gray-600 underline hover:text-red-500"
          >
            Cancel
          </button>

          {bidSuccess && (
            <p className="mt-4 text-green-600 font-semibold">
              ✅ Your bid has been submitted!
            </p>
          )}
        </div>
      )}
    </>
  );
}