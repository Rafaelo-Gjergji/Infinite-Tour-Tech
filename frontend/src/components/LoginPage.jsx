import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext"; // Import useAuth if you're managing auth state

function LoginPage() {
  const { login } = useAuth(); // Utilize the login function from your auth context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }
    try {
      login({ username, password });
    } catch (error) {
      setError("Login failed: Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-grey">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-md w-full">
        <Typography variant="h4" className="text-center mb-4">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
          >
            Login
          </Button>
          {error && (
            <Typography color="error" className="mt-2">
              {error}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
