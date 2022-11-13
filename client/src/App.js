import "./App.css";
import MapScreen from "./pages/MapScreen/MapScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map-screen" element={<MapScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
