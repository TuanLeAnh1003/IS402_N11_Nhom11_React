import "./App.css";
import MapScreen from "./pages/MapScreen/MapScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Show from "./pages/Show/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import Visit from "./pages/Visit/Visit";
import Ticket from "./pages/Ticket/Ticket";
import Contact from "./pages/Contact/Contact";
import Introduce from "./pages/Introduce/Introduce";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map-screen" element={<MapScreen />} />
        <Route path="show" element={<Show />}></Route>
        <Route path="ticket" element={<Ticket />} />
        <Route path="visit" element={<Visit />} />
        <Route path="introduce" element={<Introduce />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
