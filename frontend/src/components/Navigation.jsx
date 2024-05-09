import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { currentUser, logout } = useAuth();

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      {currentUser ? (
        <>
          <Link to="/dashboard" style={{ marginLeft: "10px" }}>
            Dashboard
          </Link>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginLeft: "10px" }}>
            Login
          </Link>
          <Link to="/register" style={{ marginLeft: "10px" }}>
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
