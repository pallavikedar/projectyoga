import React from "react";
import {  Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./Pages/SplashScreen";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
