import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">
          Student Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Management System
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-gray-100">
          Home
        </Link>

        <Link to="/dashboard" className="block px-4 py-3 rounded-lg hover:bg-gray-100">
          Dashboard
        </Link>

        <Link to="/about" className="block px-4 py-3 rounded-lg hover:bg-gray-100">
          About
        </Link>

        <Link to="/login" className="block px-4 py-3 rounded-lg hover:bg-gray-100">
          Login
        </Link>

        <Link to="/signup" className="block px-4 py-3 rounded-lg hover:bg-gray-100">
          Signup
        </Link>
      </nav>

      <div className="p-4 border-t text-sm text-gray-500">
        Version 1.0
      </div>
    </aside>
  );
};

export default Sidebar;