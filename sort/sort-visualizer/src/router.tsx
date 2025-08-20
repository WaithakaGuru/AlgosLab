import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "./App";
import AlgorithmInfo from "./AlgorithmInfo";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/visualizer" element={<App />} />
      <Route path="/info" element={<AlgorithmInfo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
