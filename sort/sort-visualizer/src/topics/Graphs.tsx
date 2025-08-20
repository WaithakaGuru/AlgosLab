import React from "react";

const Graphs: React.FC = () => (
  <div className="prose max-w-none">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">Graphs</h2>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">What is a Graph?</h3>
      <p>
        A <b>graph</b> is a non-linear data structure consisting of a set of <b>vertices</b> (nodes) and a set of <b>edges</b> (connections) that link pairs of vertices. Graphs are used to model relationships and connections in various domains.
      </p>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Applications of Graphs</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li>Social networks (users as nodes, friendships as edges)</li>
        <li>Navigation and maps (locations as nodes, roads as edges)</li>
        <li>Web page linking (pages as nodes, hyperlinks as edges)</li>
        <li>Network routing (routers/computers as nodes, connections as edges)</li>
        <li>Dependency resolution (tasks/packages as nodes, dependencies as edges)</li>
      </ul>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Components of a Graph</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li><b>Vertex (Node):</b> Fundamental unit or point in a graph.</li>
        <li><b>Edge:</b> Connection between two vertices.</li>
        <li><b>Adjacency:</b> Two vertices are adjacent if they are connected by an edge.</li>
        <li><b>Degree:</b> Number of edges incident to a vertex.</li>
      </ul>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Graph Representation Methods</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li><b>Adjacency Matrix:</b> 2D array where cell (i, j) is 1 (or weight) if there is an edge from i to j.</li>
        <li><b>Adjacency List:</b> Array/list of lists, where each index stores a list of adjacent vertices.</li>
        <li><b>Edge List:</b> List of all edges as pairs (or triplets for weighted graphs).</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <span className="font-mono text-xs text-slate-500 mb-1">Adjacency Matrix</span>
          <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
// 0: A, 1: B, 2: C
const matrix = [
  [0, 1, 1], // A
  [1, 0, 0], // B
  [1, 0, 0], // C
];
`}</pre>
        </div>
        <div>
          <span className="font-mono text-xs text-slate-500 mb-1">Adjacency List</span>
          <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
const adjList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
};
`}</pre>
        </div>
        <div>
          <span className="font-mono text-xs text-slate-500 mb-1">Edge List</span>
          <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
const edges = [
  ["A", "B"],
  ["A", "C"],
];
`}</pre>
        </div>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Types of Graphs</h3>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li><b>Directed Graph (Digraph):</b> Edges have direction (A → B).</li>
        <li><b>Undirected Graph:</b> Edges have no direction (A — B).</li>
        <li><b>Weighted Graph:</b> Edges have weights/costs.</li>
        <li><b>Unweighted Graph:</b> All edges are equal.</li>
        <li><b>Cyclic / Acyclic:</b> Contains/does not contain cycles.</li>
        <li><b>Connected / Disconnected:</b> All nodes are reachable / not all nodes are reachable.</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs text-slate-500 mb-1">Directed Graph</span>
          <svg width="120" height="80" viewBox="0 0 120 80">
            <circle cx="30" cy="40" r="16" fill="#38bdf8" />
            <text x="30" y="45" textAnchor="middle" fontSize="14" fill="#fff">A</text>
            <circle cx="90" cy="40" r="16" fill="#818cf8" />
            <text x="90" y="45" textAnchor="middle" fontSize="14" fill="#fff">B</text>
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L10,5 L0,10 Z" fill="#64748b" />
              </marker>
            </defs>
            <line x1="46" y1="40" x2="74" y2="40" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs text-slate-500 mb-1">Undirected Graph</span>
          <svg width="120" height="80" viewBox="0 0 120 80">
            <circle cx="30" cy="40" r="16" fill="#38bdf8" />
            <text x="30" y="45" textAnchor="middle" fontSize="14" fill="#fff">A</text>
            <circle cx="90" cy="40" r="16" fill="#818cf8" />
            <text x="90" y="45" textAnchor="middle" fontSize="14" fill="#fff">B</text>
            <line x1="46" y1="40" x2="74" y2="40" stroke="#64748b" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs text-slate-500 mb-1">Weighted Graph</span>
          <svg width="120" height="80" viewBox="0 0 120 80">
            <circle cx="30" cy="40" r="16" fill="#38bdf8" />
            <text x="30" y="45" textAnchor="middle" fontSize="14" fill="#fff">A</text>
            <circle cx="90" cy="40" r="16" fill="#818cf8" />
            <text x="90" y="45" textAnchor="middle" fontSize="14" fill="#fff">B</text>
            <line x1="46" y1="40" x2="74" y2="40" stroke="#64748b" strokeWidth="2" />
            <rect x="57" y="28" width="18" height="16" rx="4" fill="#f472b6" />
            <text x="66" y="40" textAnchor="middle" fontSize="12" fill="#fff">5</text>
          </svg>
        </div>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Key Operations & Code Snippets</h3>
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 mb-1">Add Vertex & Edge (Adjacency List)</h4>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }
  addEdge(v, w) {
    this.addVertex(v);
    this.addVertex(w);
    this.adjList[v].push(w); // For undirected, also add: this.adjList[w].push(v)
  }
}
`}</pre>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 mb-1">DFS Traversal (Adjacency List)</h4>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;
  console.log(start);
  visited.add(start);
  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
`}</pre>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 mb-1">BFS Traversal (Adjacency List)</h4>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-xs max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
`}</pre>
      </div>
    </section>
  </div>
);

export default Graphs;
