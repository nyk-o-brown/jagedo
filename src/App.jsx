import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import AuthenticatedLayout from "./components/authenticator";

import AIDetection from './pages/AIDetection';
import EmergencyLoan from './pages/EmergencyLoan';
import MedicalConnection from './pages/MedicalConnection';
import UserDashboard from "./pages/UserDashboard";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard/*"
        element={isLoggedIn ? <AuthenticatedLayout /> : <Navigate to="/login" />}
      >
        <Route path="Jobs" element={<UserDashboard />} />
        <Route path="AIinjury" element={<AIDetection />} />
        <Route path="loan/*" element={<EmergencyLoan />} />
        <Route path="medical" element={<MedicalConnection />} />
      </Route>
    </Routes>
  );
}

export default App;
