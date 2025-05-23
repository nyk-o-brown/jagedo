// src/components/AuthenticatedLayout.jsx
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import { Outlet } from "react-router-dom";

const AuthenticatedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className=" bg-white shadow">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className=" bg-gray-50 p-4 overflow-auto w-full">
          <UserProfile />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthenticatedLayout;
