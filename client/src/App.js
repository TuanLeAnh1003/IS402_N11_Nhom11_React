import './App.css';
import MapScreen from './pages/MapScreen/MapScreen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import React, { useState } from 'react';

function App() {
  const [layout, setLayout] = useState("home")

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home layout={layout} />}
        />
        <Route
          path="map-screen"
          element={<MapScreen layout={layout} setLayout={setLayout} />}
        />
      </Routes>
      <MapScreen />
    </div>
  );
}

export default App;
