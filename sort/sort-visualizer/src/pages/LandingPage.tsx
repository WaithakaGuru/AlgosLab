import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Stack} from "@mui/material";

const LandingPage= () => {
  return (
    <Stack>
      {/* Navigation Bar */}
      <div className="w-full bg-slate-800 py-4 px-6 flex items-center justify-between shadow">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg select-none">
              <span className="font-black">Algos</span>
              <span className="font-black text-pink-400">Lab</span>
            </div>
            <span className="text-blue-300 text-[1rem] italic tracking-wide">your goto DSA Hub</span>
          </div>
          <nav className="flex gap-4">
            <Link to="/info" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Learn DSA</Link>
            <Link to="/sorta" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Sorta</Link>
          </nav>
      </div>
  
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-6 bg-gradient-to-br from-blue-100 via-sky-200 to-indigo-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-300 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" style={{filter:'blur(80px)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400 via-blue-300 to-sky-200 rounded-full opacity-20 blur-2xl -z-10 animate-pulse" style={{filter:'blur(80px)'}}></div>
        <div className="max-w-4xl w-full text-center px-4">
          <div className="text-5xl md:text-6xl font-extrabold text-transparent
          bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 mb-4 drop-shadow-lg">Welcome to 
            <div className="tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
             bg-clip-text text-transparent drop-shadow-lg select-none inline ml-4">
              <span className="font-black">Algos</span>
              <span className="font-black text-pink-400">Lab</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-4 font-semibold tracking-wide">Learn and Visualize Data Structures & Algorithms</h2>
          <p className="text-slate-800 mb-6 text-lg font-medium">
            <span className="font-bold text-blue-800">AlgosLab</span> is your interactive home for all things Data Structures and Algorithms (DSA). Dive into in-depth explanations, code, and visualizations for sorting, searching, and more.<br/>
          </p>
          <div className="flex flex-row gap-6 justify-center items-center my-8">
            <Link to="/info">
              <button className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500 cursor-pointer text-white font-bold py-3 px-7 rounded-lg text-lg shadow-lg transition-all duration-200">
                Learn DSA
              </button>
            </Link>
            <Link to="/sorta">
              <button className="border-2 border-blue-600 text-blue-700 bg-white hover:bg-blue-50 font-bold py-3 px-7 rounded-lg text-lg shadow-lg transition-all duration-200">
                Visualize with Sorta
              </button>
            </Link>
          </div>
          <div className="my-8 text-slate-600 text-base">
            <span className="font-semibold text-blue-700">AlgosLab</span> is the house for all DSA with <span className="font-bold text-blue-600">Sorta</span> and <span className="font-bold text-blue-600">AlgoLearn packages</span> for sort visualizations and DSA learning
          </div>
        </div>
      </div>

      <Stack component={"main"} className="bg-gray-100">

        {/* Packages Section */}
        <div className="w-full max-w-6xl mx-auto mt-12 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {/* AlgoLearn Package */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="flex flex-col items-center mb-3">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="28" fill="#2563eb" stroke="#1e40af" strokeWidth="3" />
                  <text x="30" y="38" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold">A</text>
                </svg>
                <span className="text-xl font-bold text-blue-700 mt-2">AlgoLearn</span>
              </div>
              <p className="text-slate-700 text-center mb-2">AlgoLearn is your interactive DSA learning suite. Explore in-depth explanations, code, and visualizations for arrays, stacks, queues, linked lists, trees, graphs, heaps, and more.</p>
              <p className="text-slate-600 text-center mb-2">Perfect for students, interview prep, and anyone wanting to master DSA concepts visually and interactively.</p>
              <div className="w-full bg-slate-100 rounded p-3 mt-2">
                <span className="block text-slate-500 text-xs mb-1">Example:</span>
                <pre className="bg-slate-200 rounded p-2 text-xs overflow-x-auto">{`// Learn about Trees interactively
        <AlgoLearn topic="Trees" />`}</pre>
              </div>
            </div>
  
            {/* Sorta Package */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="flex flex-col items-center mb-3">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="8" y="8" width="44" height="44" rx="10" fill="#0ea5e9" stroke="#0369a1" strokeWidth="3" />
                  <text x="30" y="38" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold">S</text>
                </svg>
                <span className="text-xl font-bold text-sky-700 mt-2">Sorta</span>
              </div>
              <p className="text-slate-700 text-center mb-2">Sorta is a visual playground for sorting algorithms. Instantly see how Bubble, Selection, Insertion, Merge, Quick, Heap, and Bucket Sort work step by step.</p>
              <p className="text-slate-600 text-center mb-2">Great for building intuition about sorting, comparing algorithms, and teaching or learning visually.</p>
              <div className="w-full bg-slate-100 rounded p-3 mt-2">
                <span className="block text-slate-500 text-xs mb-1">Example:</span>
                <pre className="bg-slate-200 rounded p-2 text-xs overflow-x-auto">{`// Visualize Quick Sort
        <Sorta algorithm="quickSort" array={[5, 2, 9, 1]} />`}</pre>
              </div>
            </div>
  
            {/* Finder Package (Coming Soon) */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200 opacity-60">
              <div className="flex flex-col items-center mb-3">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <ellipse cx="30" cy="30" rx="26" ry="20" fill="#f59e42" stroke="#ea580c" strokeWidth="3" />
                  <text x="30" y="38" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold">F</text>
                </svg>
                <span className="text-xl font-bold text-orange-700 mt-2">Finder</span>
                <span className="text-xs text-orange-500 mt-1 font-semibold uppercase tracking-wider">Coming Soon</span>
              </div>
              <p className="text-slate-700 text-center mb-2">Finder is a digital playground to showcase and compare how different search algorithms work—linear, binary, interpolation, and more.</p>
              <p className="text-slate-600 text-center mb-2">Experiment, visualize, and learn the strengths and weaknesses of each search method in real time.</p>
              <div className="w-full bg-slate-100 rounded p-3 mt-2">
                <span className="block text-slate-500 text-xs mb-1">Example:</span>
                <pre className="bg-slate-200 rounded p-2 text-xs overflow-x-auto">{`// Coming soon: Visualize Binary Search
        <Finder algorithm="binarySearch" array={[1,2,3,4,5]} target={3} />`}</pre>
              </div>
            </div>
          </div>
        </div>
  
        {/* Testimonials Section */}
        <div className="w-full max-w-6xl mx-auto mt-4 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-indigo-700">W</span>
              </div>
              <p className="text-slate-700 text-center mb-2 italic">“I built AlgosLab as a give back to the community and to support fellow devs. Let's keep learning and growing together!”</p>
              <span className="text-slate-500 text-sm mt-2">— WaithakaGuru, Creator</span>
            </div>
  
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-blue-700">J</span>
              </div>
              <p className="text-slate-700 text-center mb-2 italic">“AlgoLearn made DSA finally click for me. The visuals and step-by-step code are a game changer!”</p>
              <span className="text-slate-500 text-sm mt-2">— Jane M., CS Student</span>
            </div>
  
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-orange-700">O</span>
              </div>
              <p className="text-slate-700 text-center mb-2 italic">“Sorta is the best way to see how sorting really works. I use it to teach my students every semester.”</p>
              <span className="text-slate-500 text-sm mt-2">— Prof. K. Otieno, Lecturer</span>
            </div>
        
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-green-700">D</span>
              </div>
              <p className="text-slate-700 text-center mb-2 italic">“I aced my coding interview thanks to AlgosLab. The interactive practice was exactly what I needed.”</p>
              <span className="text-slate-500 text-sm mt-2">— David W., Software Engineer</span>
            </div>
          </div>
        </div>
  
        {/* Large CTA Button */}
        <div className="w-full flex justify-center my-12">
            <Link to="/info">
              <button className="bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500 text-white font-extrabold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all duration-200">
                Start Learning Today
              </button>
            </Link>
        </div>
      </Stack>

      <Footer/>
    </Stack>
  );
};

export default LandingPage;
