import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 md:px-8 py-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <h1 className="text-xl md:text-2xl font-bold text-center">
          🎓 Student Dashboard
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;