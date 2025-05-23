

import { useState } from "react"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import { LoanForm } from "../components/LoanForm"
import {RepayLoan} from "../components/RepayLoan"
import {SaveWithUs} from "../components/SaveWithUs"
import {LoanActivity} from "../components/LoanActivity"

function Card({title, description, buttonText, to}){
    return (
        <div className="bg-white p-4 rounded shadow border">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="mb-4 tet-sm text-gray-700">{description}</p>
            <Link to={to}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {buttonText}
                </button>
            </Link>
        </div>
    )
}

export default function EmergencyLoan() {
//   const [form, setForm] = useState({amount:"", reason:""});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({...form, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setSubmitted(true);
//   };

  return(
    <div className="p-4 space-y-6">
        <h2 className="text-xl font-bold">Loan Dashboard</h2>
        <Routes>
            <Route
                path=""
                element={
                <div className="text-gray-600 text-center text-xl">
                    <p>💡 Select an action above to get started.</p>
                </div>
            }
            />
        </Routes>
        <div className="grid grid-cols-1  gap-4">
            <Card
                title="Request Loan"
                description= "Get quick funds in times of emergency"
                buttonText= "Request Now"
                to="loan/request"
            />
            <Card 
                title="Repay Loan"
                description= "Repay your active loan to keep a good credit score."
                buttonText= "Repay"
                to="loan/repay"
            />
            <Card 
                title="Save with us"
                description= "Save money and grow your loan limit over time."
                buttonText= "Start Saving"
                to="loan/save"
            />
        </div>
        <div className="mt-6">
            <Link to="activity" className="text-blue-600 underline">
                View All Loan Activity
            </Link>
        </div>

        <Routes>
            <Route path="loan/request" element={<LoanForm />} />
            <Route path="loan/repay" element={<RepayLoan />} />
            <Route path="loan/save" element={<SaveWithUs />} />
            <Route path="loan/activity" element={<LoanActivity />} />
        </Routes>
    </div>
  )
}
