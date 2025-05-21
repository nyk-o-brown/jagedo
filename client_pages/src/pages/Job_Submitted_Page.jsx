import React, { useEffect } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

const JobCompletedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/offers");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-500 w-screen">
            <Header />
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-bold mb-4">Job Completed</h1>
                <p className="text-lg">Congratulations! Your job has been successfully completed.</p>
            </div>
        </div>
    );
};

export default JobCompletedPage;