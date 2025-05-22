import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="p-4 bg-white h-full shadow-md">
      <nav className="space-y-4">
        <Link to="/dashboard/Jobs" className="block hover:text-blue-600 text-xl mb-5">Available Job</Link>
        <Link to="/dashboard/AIinjury" className="block hover:text-blue-600 text-xl mb-5">AI Injury Detection</Link>
        <Link to="/dashboard/loan" className="block hover:text-blue-600 text-xl mb-5">Emergency Loan</Link>
        <Link to="/dashboard/medical" className="block hover:text-blue-600 text-xl mb-5">Medical Connection</Link>
      </nav>
    </div>
  );
}
