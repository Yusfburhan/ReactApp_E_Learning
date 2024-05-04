import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve token and user info from localStorage
    const token = localStorage.getItem("token");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (token && storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      // Redirect to login page if token or userInfo is missing
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page or any other page as needed
    navigate("/"); // Redirect to login page
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      {userInfo && userInfo.role === "student" ? (
        <div className="bg-red-500">
          <h1>Welcome, {userInfo ? userInfo.name : "Guest"}!</h1>
          <h1>Welcome, {userInfo ? userInfo.role : "Guest"}!</h1>
          <button onClick={handleLogout} className="bg-red-500 py-3 px-5">
            Logout
          </button>
          <button onClick={goToDashboard} className="bg-red-500 py-3 px-5">
            Dashboard
          </button>
        </div>
      ) : (
        <div className="bg-green-500">
          <h1>Welcome, {userInfo ? userInfo.name : "Guest"}!</h1>
          <h1>Welcome, {userInfo ? userInfo.role : "Guest"}!</h1>
          <button onClick={handleLogout} className="bg-red-500 py-3 px-5">
            Logout
          </button>
          <button onClick={goToDashboard} className="bg-red-500 py-3 px-5">
            Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
