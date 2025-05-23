import { useState } from "react";

const injuries = [
  "Head Injury",
  "Broken Arm",
  "Back Pain",
  "Severe Cut",
  "Heat Exhaustion",
  "Very serious Injury",
];

export default function AIDetection(){
    const [status, setStatus] = useState("");

    const simulateDetection = () =>{
        const random = injuries[Math.floor(Math.random() * injuries.length)];
        setStatus(`AI Detected Possible: ${random}`);
        setTimeout(() => {
            setStatus("Report sent to Site Manager and Safety Team.");
        }, 2000);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">AI Injury Detection</h2>
            <button
            onClick={simulateDetection}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Start Simulation
            </button>
            {status && <p className="mt-4 text-lg">{status}</p>}
        </div>
    );
}