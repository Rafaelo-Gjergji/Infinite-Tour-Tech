import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Export the useAuth custom hook for easy access to the context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component that wraps your app and provides auth state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user login
  const login = async (userCredentials) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access_token); // Store the token
        setCurrentUser({ username: userCredentials.username }); // Update user state
      } else {
        throw new Error(data.message || "Failed to log in");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("token"); // Clear the token
    setCurrentUser(null); // Clear the user state
  };

  // Optionally check for an existing token to auto-login the user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Here you might want to validate the token or refresh it
      setCurrentUser({ username: "Fetched from token" }); // Set user state based on token
    }
  }, []);

  // The value that will be supplied to the context
  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
