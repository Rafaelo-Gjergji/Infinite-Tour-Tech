import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Export the useAuth custom hook for easy access to the context
export function useAuth() {
    return useContext(AuthContext);
}

// Provider component that wraps your app and provides auth state
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    // Function to simulate user login
    const login = (userCredentials) => {
        // Here you should implement real login logic
        setCurrentUser({ id: '1', username: 'JohnDoe' });
    };

    // Function to simulate user logout
    const logout = () => {
        setCurrentUser(null);
    };

    // Load the user from the storage or validate with backend here
    useEffect(() => {
        // Check for user authentication and update state
    }, []);

    // Value to be passed to provider
    const value = {
        currentUser,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}