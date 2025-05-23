import React from "react";

export default function MedicalConnection() {
  const Hospital = [
    { name: "Nairobi West Hospital", contact: "+254 700 000 000", location: "Vally Arcade" },
    { name: "Kenyatta National Hospital", contact: "+254 711 222 333", location: "Kenyatta"  },
    { name: "St. John Ambulance", contact: "+254 722 123 456", location: "Nairobi"  },
  ];

  const insurance = { name: "BimaCare Basic Plan", description: "Covers minor injuries and outpatient services up to KSh 15,000 per year.", active: true };
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Hospital Contact Card */}
        <div>
            {Hospital.map((hospital, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Nearest Hospital</h3>
                <p><strong>Name:</strong> {hospital.name}</p>
                <p><strong>Location:</strong> {hospital.location}</p>
                <p><strong>Contact:</strong> <span className="text-green-600">{hospital.contact}</span></p>
            </div>
            ))}
        </div>

    {/* Insurance Policy Card */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Insurance Policy</h3>
            <p><strong>Policy:</strong> {insurance.name}</p>
            <p><strong>Details:</strong> {insurance.description}</p>
            <p><strong>Status:</strong> <span className={insurance.active ? "text-green-600" : "text-red-600"}>{insurance.active ? "Active" : "Inactive"}</span></p>
        </div>
  </div>
  );
}
