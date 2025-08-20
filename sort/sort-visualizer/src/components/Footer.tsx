import React from "react";

const currentYear = () => new Date().getFullYear();

const Footer: React.FC = () => (
  <footer className="bg-slate-800 text-white pt-8 pb-2 px-4 w-full">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-8">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-2">AlgosLab</h2>
        <p className="text-slate-300 max-w-xs">
          AlgosLab is your interactive hub for learning and visualizing Data Structures & Algorithms. Explore, experiment, and master DSA concepts with hands-on tools and clear explanations.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/visualizer" className="hover:underline">Sorta</a></li>
          <li><a href="/info" className="hover:underline">AlgoLearn</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Contact</h3>
        <ul className="space-y-1 text-slate-300">
          <li>Email: <a href="mailto:waithakaguru@gmail.com" className="hover:underline">waithakaguru@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/WaithakaGuru" target="_blank" rel="noopener noreferrer" className="hover:underline">WaithakaGuru</a></li>
          <li>Phone: <a href="tel:+254712345678" className="hover:underline">+254 712 345 678</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-slate-700 mt-8 pt-4 text-center text-slate-400 text-sm">
      &copy; {currentYear()} AlgosLab. All rights reserved. 
        <p className="inline ml-8">
            Made with <span className="text-red-400">♥</span> by <a href="https://github.com/WaithakaGuru" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">Waithaka</a>
        </p>    
    </div>
  </footer>
);

export default Footer;
