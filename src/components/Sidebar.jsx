import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">
          Student Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Management System
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/about"
          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          About
        </Link>

        <Link
          to="/login"
          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Signup
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
        Version 1.0
      </div>
    </aside>
  );
};

export default Sidebar;