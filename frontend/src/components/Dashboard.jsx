import React from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Dashboard</h1>
      <p>Welcome, {currentUser.username}!</p>
      <div className="mt-4 p-4 rounded shadow bg-white">
        <p>This is your dashboard where you can view your activity and manage your account.</p>
      </div>
    </div>
  );
}

export default Dashboard;

