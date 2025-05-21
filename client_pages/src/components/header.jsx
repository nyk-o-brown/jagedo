import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">Jagedo</h1>
      <div>
        <button
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
          onClick={() => navigate("/")}
        >
          Job Description
        </button>
        <button
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
          onClick={() => navigate("/offers")}
        >
          Offers Received
        </button>
        <button
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
          onClick={() => navigate("/client-job/1")}
        >
          Client Job
        </button>
      </div>
    </header>
  );
}

export default Header;