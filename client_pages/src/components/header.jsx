import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">Jagedo</h1>
      <nav>
        <Link
          to="/"
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
        >
          Job Description
        </Link>
        <Link
          to="/offers"
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
        >
          Offers Received
        </Link>
        <Link
          to="/client-job/1"
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
        >
          Client Job
        </Link>
        <Link
          to="/fundi-jobs"
          className="bg-white text-blue-600 px-3 py-1 rounded mx-1"
        >
          Fundi Jobs
        </Link>
      </nav>
    </header>
  );
}

export default Header;