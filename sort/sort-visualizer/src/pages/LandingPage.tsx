import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-0 m-0">
      <div className="max-w-2xl w-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Welcome to AlgosLab</h1>
        <h2 className="text-2xl md:text-3xl text-slate-500 mb-4 font-semibold">Learn and Visualize Data Structures & Algorithms</h2>
        <p className="text-lg text-slate-700 mb-6">
          <span className="font-semibold text-slate-800">AlgosLab</span> is your interactive home for all things Data Structures and Algorithms (DSA). Dive into in-depth explanations, code, and visualizations for sorting, searching, and more.<br/>
          <span className="block mt-4 text-slate-600">The <span className="font-bold text-blue-600">Sorta</span> section is a dedicated, hands-on playground for sorting algorithms—just one of many DSA areas you can explore here.</span>
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <Link to="/info">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow">
              Learn DSA
            </button>
          </Link>
          <Link to="/visualizer">
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg text-lg shadow">
              Visualize with Sorta
            </button>
          </Link>
        </div>
        <div className="mt-8 text-slate-500 text-sm">
          <span className="font-semibold text-slate-700">AlgosLab</span> is the house for all DSA. <span className="font-bold text-blue-600">Sorta</span> is a subsidiary section focused on sorting visualizations.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
