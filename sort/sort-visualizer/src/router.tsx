import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "./App";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/visualizer" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
