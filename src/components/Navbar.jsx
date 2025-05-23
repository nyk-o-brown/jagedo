import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <nav className="bg-blue-700 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold">SafeFundi</div>
      <div className="space-x-4">
        <span>Call us: +254 712 345 678</span>
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
