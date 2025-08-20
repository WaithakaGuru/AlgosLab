import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Sorta from "./pages/Sorta";
import AlgorithmInfo from "./pages/AlgorithmInfo";

const Router = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/visualizer" element={<Sorta />} />
    <Route path="/info" element={<AlgorithmInfo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
