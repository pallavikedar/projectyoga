import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import logo from "../Assets/logo.jpg";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to Home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="logo1"  />
    </div>
  );
}

export default SplashScreen;
