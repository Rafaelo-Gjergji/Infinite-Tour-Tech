import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/IMG_1407.jpeg" alt="Infinite Tour Technologies Logo" className="h-12 mr-3" />
          <Link to="/" className="text-lg font-semibold text-brand-blue hover:text-brand-grey">
            Infinite Tour Technologies
          </Link>
        </div>
        <div>
          {currentUser ? (
            <>
              <Link to="/dashboard" className="text-brand-blue hover:text-brand-grey mx-4">
                Dashboard
              </Link>
              <button onClick={logout} className="text-brand-blue hover:text-brand-grey">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-brand-blue hover:text-brand-grey mx-4">
                Login
              </Link>
              <Link to="/register" className="text-brand-blue hover:text-brand-grey">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
