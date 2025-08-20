
import { useState, useRef } from "react";
import "../index.css";
import * as visualSorts from "../visualSorts";
import { Link } from "react-router-dom";

function getRandomArray(size: number, min = 1, max = 99): number[] {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}

export default function Sorta() {
  const [array, setArray] = useState<number[]>([]);
  const [size, setSize] = useState(10);
  const [algorithm, setAlgorithm] = useState("quickSort");
  const [speed, setSpeed] = useState(500);
  const [sorting, setSorting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [contestantIndices, setContestantIndices] = useState<number[]>([]);
  const [buckets, setBuckets] = useState<number[][] | null>(null); // for bucketSort
  const [mergeSubarrays, setMergeSubarrays] = useState<number[][] | null>(null); // for mergeSort
  const [insertionBoundary, setInsertionBoundary] = useState<number | null>(null); // for insertionSort
  const sortGenRef = useRef<Generator<number[], void, unknown> | null>(null);

  const generateArray = () => {
    setArray(getRandomArray(size));
    setCurrentIndices([]);
    setSortedIndices([]);
    setContestantIndices([]);
  };

  const handlePause = () => setPaused((prev) => !prev);

  const runSort = async () => {
    if (!array.length) return;
    setSorting(true);
    setPaused(false);
    setCurrentIndices([]);
    setSortedIndices([]);
    setContestantIndices([]);
    setBuckets(null);
    setMergeSubarrays(null);
    setInsertionBoundary(null);
    const genName = algorithm + "Steps";
    const sortGen = (visualSorts as any)[genName] as (
      arr: number[],
      opts?: any,
    ) => Generator<any>;
    if (!sortGen) {
      setSorting(false);
      return;
    }
    let extraInfo: any = {};
    if (algorithm === "bucketSort") {
      extraInfo.onBuckets = (b: number[][]) =>
        setBuckets(b.map((bucket) => [...bucket]));
    }
    if (algorithm === "mergeSort") {
      extraInfo.onSubarrays = (subs: number[][]) =>
        setMergeSubarrays(subs.map((sub) => [...sub]));
    }
    if (algorithm === "insertionSort") {
      extraInfo.onBoundary = (boundary: number) =>
        setInsertionBoundary(boundary);
    }
    const gen = sortGen(array.slice(), extraInfo);
    sortGenRef.current = gen;
    let step = gen.next();
    let lastArr: number[] = array.slice();
    let lastContestants: number[] = [];
    let lastStepArr: number[] = [];
    while (!step.done) {
      while (paused) {
        await new Promise((res) => setTimeout(res, 100));
      }
      const arrStep = step.value;
      setArray(arrStep);
      lastStepArr = arrStep;
      const changed: number[] = [];
      arrStep.forEach((v: number, i: number) => {
        if (v !== lastArr[i]) changed.push(i);
      });
      setCurrentIndices(changed);
      if (changed.length === 2) {
        setContestantIndices([changed[0], changed[1]]);
        lastContestants = [changed[0], changed[1]];
      } else {
        setContestantIndices(lastContestants);
      }
      lastArr = arrStep.slice();
      await new Promise((res) => setTimeout(res, speed));
      step = gen.next();
    }
    setSortedIndices(Array.from({ length: lastStepArr.length }, (_, i) => i));
    setCurrentIndices([]);
    setContestantIndices([]);
    setArray(lastStepArr);
    setSorting(false);
    setBuckets(null);
    setMergeSubarrays(null);
    setInsertionBoundary(null);
  };

  const maxVal = Math.max(...array, 1);
  return (
    <div className="min-h-screen bg-slate-100 text-black flex flex-col items-center justify-center p-0 m-0">
      {/* Top Bar with Navigation */}
      <div className="w-full bg-blue-600 py-4 px-6 flex items-center justify-between shadow">
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold tracking-wide">Sorta</span>
          <span className="text-blue-200 text-lg font-normal ml-2">by AlgosLab</span>
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Home</Link>
          <Link to="/info" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Learn DSA</Link>
        </nav>
      </div>
      <div className="my-2 flex flex-col items-center justify-center flex-1 w-full md:w-[90%]">
        <div className="px-8 py-2 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col justify-center mx-auto w-full md:w-[90%]">
          <h2 className="font-bold text-lg text-left mb-2">Set Array size, Sorting method and delay</h2>
          <div className="flex flex-wrap flex-row items-end gap-2 border border-slate-200 p-3">
            <div>
              <div className="text-slate-800 mb-1">Array Size</div>
              <input
                type="number"
                value={size}
                onChange={(e) => {
                  let val = parseInt(e.target.value, 10);
                  if (isNaN(val)) val = 10;
                  if (val < 10) val = 10;
                  if (val > 100) val = 100;
                  setSize(val);
                }}
                min={10}
                max={100}
                className="w-32 h-10 bg-white rounded border border-slate-300 px-2"
              />
            </div>
            <div>
              <div className="text-slate-800 mb-1">Algorithm</div>
              <select
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                className="bg-white h-10 w-40 rounded border border-slate-300 px-2"
              >
                <option value="bucketSort">Bucket Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="heapSort">Heap Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="mergeSort">Merge Sort</option>
              </select>
            </div>
            <div>
              <div className="text-slate-800 mb-1">Delay (ms)</div>
              <input
                type="number"
                value={speed}
                onChange={(e) => {
                  let val = parseInt(e.target.value, 10);
                  if (isNaN(val)) val = 50;
                  if (val < 50) val = 50;
                  if (val > 2000) val = 2000;
                  setSpeed(val);
                }}
                min={50}
                max={2000}
                step={50}
                className="w-24 h-10 bg-white rounded border border-slate-200 px-2"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={generateArray}
                className="rounded h-12 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 disabled:opacity-50"
                disabled={sorting}
              >
                Create Array
              </button>
              <button
                onClick={runSort}
                className="rounded h-12 px-4 bg-green-500 text-white font-semibold hover:bg-green-600 disabled:opacity-50"
                disabled={sorting || !array.length}
              >
                {sorting ? "Sorting..." : "Sort Array"}
              </button>
              <button
                onClick={handlePause}
                className="rounded h-12 px-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 disabled:opacity-50"
                disabled={!sorting}
              >
                {paused ? "Resume" : "Pause"}
              </button>
            </div>
          </div>
          <div className="mt-4 w-full flex flex-col">
            <div className="italic text-slate-800 text-left mb-2">Array Visualization:</div>
            <div className="flex relative items-end justify-center gap-1 w-full bg-slate-800 rounded-xl border border-slate-200 p-4 pl-12 overflow-x-auto">
              {/* Bucket/merge/insertion lines */}
              {algorithm === "bucketSort" &&
                buckets &&
                buckets.length > 1 &&
                buckets.reduce<React.ReactElement[]>((acc, _bucket, idx) => {
                  if (idx === 0) return acc;
                  const left = buckets
                    .slice(0, idx)
                    .reduce((sum, b) => sum + b.length, 0);
                  acc.push(
                    <div
                      key={idx}
                      className="absolute z-20 rounded"
                      style={{
                        left: `${(left / array.length) * 100}%`,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        background: 'lime',
                      }}
                    />
                  );
                  return acc;
                }, [])}
              {algorithm === "mergeSort" &&
                mergeSubarrays &&
                mergeSubarrays.length > 1 &&
                mergeSubarrays.reduce<React.ReactElement[]>(
                  (acc, _sub, idx) => {
                    if (idx === 0) return acc;
                    const left = mergeSubarrays
                      .slice(0, idx)
                      .reduce((sum, s) => sum + s.length, 0);
                    acc.push(
                      <div
                        key={idx}
                        className="absolute z-20 rounded"
                        style={{
                          left: `${(left / array.length) * 100}%`,
                          top: 0,
                          bottom: 0,
                          width: 3,
                          background: 'lime',
                        }}
                      />
                    );
                    return acc;
                  },
                  [],
                )}
              {algorithm === "insertionSort" &&
                insertionBoundary !== null &&
                insertionBoundary > 0 &&
                insertionBoundary < array.length && (
                  <div
                    className="absolute z-20 rounded"
                    style={{
                      left: `${(insertionBoundary / array.length) * 100}%`,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: 'lime',
                    }}
                  />
                )}
              {/* Bars */}
              {array.map((num, idx) => {
                let barColor = "#38bdf8"; // sky-400
                let borderColor = "#0ea5e9"; // sky-600
                if (sortedIndices.includes(idx)) {
                  barColor = "#4ade80"; // green-400
                  borderColor = "#16a34a"; // green-600
                } else if (
                  contestantIndices.length === 2 &&
                  idx === contestantIndices[0]
                ) {
                  barColor = "#ef4444"; // red-500
                  borderColor = "#b91c1c"; // red-700
                } else if (
                  contestantIndices.length === 2 &&
                  idx === contestantIndices[1]
                ) {
                  barColor = "#f59e42"; // orange-400
                  borderColor = "#ea580c"; // orange-600
                } else if (currentIndices.includes(idx)) {
                  barColor = "#f472b6"; // pink-400
                  borderColor = "#be185d"; // pink-600
                }
                return (
                  <div key={idx} className="flex flex-col items-center w-4">
                    <div
                      className="w-full rounded-t-lg transition-all duration-200 min-w-[16px]"
                      style={{
                        background: barColor,
                        border: `2px solid ${borderColor}`,
                        height: `${(num / maxVal) * 264 + 10}px`,
                      }}
                    ></div>
                    <span className="text-xs text-slate-100 mt-1 px-1">{num}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
