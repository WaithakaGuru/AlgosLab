import { Typography } from "@mui/material";
import React from "react";

const Heaps: React.FC = () => (
  <div className="prose max-w-none">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">Heaps</h2>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">What is a Heap?</h3>
      <p>
        A <b>heap</b> is a specialized tree-based data structure that satisfies the <b>heap property</b>:
        <ul className="list-disc ml-6">
          <li><b>Max Heap:</b> Every parent node is greater than or equal to its children.</li>
          <li><b>Min Heap:</b> Every parent node is less than or equal to its children.</li>
        </ul>
        Heaps are always <b>complete binary trees</b> (all levels filled except possibly the last, filled left to right).
      </p>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Applications & Use Cases</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li>Implementing priority queues</li>
        <li>Heap sort algorithm</li>
        <li>Finding the k largest/smallest elements</li>
        <li>Scheduling systems (CPU, bandwidth, etc.)</li>
        <li>Graph algorithms (Dijkstra's, Prim's MST)</li>
      </ul>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Heap Representation</h3>
      <p>
        Heaps can be efficiently represented as arrays, since a complete binary tree can be mapped directly to array indices:
        <ul className="list-disc ml-6">
          <li>For node at index <code>i</code>:</li>
          <ul className="list-disc ml-10">
            <li>Left child: <code>2i + 1</code></li>
            <li>Right child: <code>2i + 2</code></li>
            <li>Parent: <code>Math.floor((i-1)/2)</code></li>
          </ul>
        </ul>
        This allows heaps to be stored <b>in-place</b> in an array, without explicit tree nodes.
      </p>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
// Example: Heap as array
//        10
//      /    \\
//     7      8
//    / \\    /
//   2   5  6
// Array: [10, 7, 8, 2, 5, 6]
`}</pre>

<Typography variant="h6" gutterBottom mt={2} className="text-blue-600" fontWeight={"bold"}>Implementing a Heap</Typography>
<pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
/* Core Heap Methods (MinHeap version, see comments for MaxHeap) */
const Comparers = {
  MAX: {
    option: (i, j) => i > j,
    optima: (k, l, heap) => (heap[k] >= heap[l]) ? k : l
  },
  MIN: {
    option: (i, j) => i < j,
    optima: (k, l, heap) => (heap[k] <= heap[l]) ? k : l
  }
};

export default class Heap {
  constructor(type = "MIN") { // Use "MAX" for max heap
    this.type = type;
    this.heap = [];
  }
  get len() {
    return this.heap.length === 0 ? 0 : this.heap.length - 1;
  }
  heapify(arr) {
    this.heap = [...arr];
    for (let i = Math.floor(this.len / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }
  pluck() {
    if (this.heap.length === 0) return;
    [this.heap[0], this.heap[this.len]] = [this.heap[this.len], this.heap[0]];
    const min = this.heap.pop();
    this.siftDown(0);
    return min;
  }
  siftUp(i) {
    let parent = Math.floor((i - 1) / 2);
    const comp = Comparers[this.type].option;
    while (i > 0 && comp(this.heap[i], this.heap[parent])) {
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }
  siftDown(i) {
    const comp = Comparers[this.type === "MAX" ? "MIN" : "MAX"].option;
    const optimalChild = Comparers[this.type].optima;
    let left = 2 * i + 1, right = 2 * i + 2;
    while (true) {
      if (left > this.len) return;
      let child = (right > this.len) ? left : optimalChild(left, right, this.heap);
      if (comp(this.heap[i], this.heap[child])) {
        [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]];
        i = child;
        left = 2 * i + 1;
        right = 2 * i + 2;
      } else break;
    }
  }
  // To convert to MaxHeap:
  // - Pass "MAX" to constructor
  // - Comparers logic automatically switches for siftUp/siftDown
}
`}</pre>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Max Heap</h3>
      <p>In a Max Heap, the largest element is always at the root.</p>
      <div className="flex flex-col items-center mb-2">
        <span className="font-mono text-xs text-slate-500 mb-1">Visual: Max Heap</span>
        <svg width="220" height="110" viewBox="0 0 220 110">
          <g>
            <circle cx="110" cy="30" r="18" fill="#38bdf8" />
            <text x="110" y="36" textAnchor="middle" fontSize="16" fill="#fff">10</text>
            <circle cx="55" cy="70" r="15" fill="#818cf8" />
            <text x="55" y="75" textAnchor="middle" fontSize="13" fill="#fff">7</text>
            <circle cx="165" cy="70" r="15" fill="#818cf8" />
            <text x="165" y="75" textAnchor="middle" fontSize="13" fill="#fff">8</text>
            <circle cx="35" cy="100" r="12" fill="#f472b6" />
            <text x="35" y="105" textAnchor="middle" fontSize="11" fill="#fff">2</text>
            <circle cx="75" cy="100" r="12" fill="#f472b6" />
            <text x="75" y="105" textAnchor="middle" fontSize="11" fill="#fff">5</text>
            <circle cx="145" cy="100" r="12" fill="#f472b6" />
            <text x="145" y="105" textAnchor="middle" fontSize="11" fill="#fff">6</text>
            <line x1="110" y1="30" x2="55" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="110" y1="30" x2="165" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="55" y1="70" x2="35" y2="100" stroke="#64748b" strokeWidth="2" />
            <line x1="55" y1="70" x2="75" y2="100" stroke="#64748b" strokeWidth="2" />
            <line x1="165" y1="70" x2="145" y2="100" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
// MaxHeap class (from Heap code above)
import { Heap } from "./Heap";
export default class MaxHeap extends Heap {
  constructor() {
    super("MAX");
  }
}
`}</pre>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Min Heap</h3>
      <p>In a Min Heap, the smallest element is always at the root.</p>
      <div className="flex flex-col items-center mb-2">
        <span className="font-mono text-xs text-slate-500 mb-1">Visual: Min Heap</span>
        <svg width="220" height="110" viewBox="0 0 220 110">
          <g>
            <circle cx="110" cy="30" r="18" fill="#38bdf8" />
            <text x="110" y="36" textAnchor="middle" fontSize="16" fill="#fff">2</text>
            <circle cx="55" cy="70" r="15" fill="#818cf8" />
            <text x="55" y="75" textAnchor="middle" fontSize="13" fill="#fff">5</text>
            <circle cx="165" cy="70" r="15" fill="#818cf8" />
            <text x="165" y="75" textAnchor="middle" fontSize="13" fill="#fff">6</text>
            <circle cx="35" cy="100" r="12" fill="#f472b6" />
            <text x="35" y="105" textAnchor="middle" fontSize="11" fill="#fff">10</text>
            <circle cx="75" cy="100" r="12" fill="#f472b6" />
            <text x="75" y="105" textAnchor="middle" fontSize="11" fill="#fff">7</text>
            <circle cx="145" cy="100" r="12" fill="#f472b6" />
            <text x="145" y="105" textAnchor="middle" fontSize="11" fill="#fff">8</text>
            <line x1="110" y1="30" x2="55" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="110" y1="30" x2="165" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="55" y1="70" x2="35" y2="100" stroke="#64748b" strokeWidth="2" />
            <line x1="55" y1="70" x2="75" y2="100" stroke="#64748b" strokeWidth="2" />
            <line x1="165" y1="70" x2="145" y2="100" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
// MinHeap class (from Heap code above)
import { Heap } from "./Heap";
export default class MinHeap extends Heap {
  constructor() {
    super("MIN");
  }
}
`}</pre>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Building a Heap from an Array</h3>
      <p>
        You can efficiently build a heap from an array using the <code>heapify</code> method (O(n) time):
      </p>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
const arr = [10, 7, 8, 2, 5, 6];
const maxHeap = new MaxHeap();
maxHeap.heapify(arr); // Now maxHeap.heap is a valid max heap

const minHeap = new MinHeap();
minHeap.heapify(arr); // Now minHeap.heap is a valid min heap
`}</pre>
      <p>
        <b>Note:</b> Since heaps are always balanced and complete, the array representation is space-efficient and allows fast access to parent/child nodes.
      </p>
    </section>
  <section className="mb-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Heap Sort</h3>
      <p>
        Heap sort is an efficient sorting algorithm that uses a heap to repeatedly extract the max (or min) and build a sorted array. It has O(n log n) time complexity and sorts in-place.
      </p>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function heapSort(arr) {
  const heap = new MaxHeap();
  heap.heapify(arr);
  const sorted = [];
  while (heap.heap.length) {
    sorted.unshift(heap.pluck());
  }
  return sorted;
}
`}</pre>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Key Heap Operations</h3>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
add(val: number): void // Add value to heap
peek(): number // Get top value (max or min)
pluck(): number | undefined // Remove and return top value
update(idx: number, val: number): void // Update value at index
heapify(arr: number[]): number[] | void // Build heap from array
`}</pre>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Other Useful Info</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li>Heaps are not designed for fast search of arbitrary elements (use BSTs for that).</li>
        <li>Heaps are ideal for quick access to the largest/smallest element.</li>
        <li>Both insert and remove operations are O(log n).</li>
        <li>Heaps are widely used in real-time systems, streaming, and scheduling.</li>
      </ul>
    </section>
  </div>
);

export default Heaps;
