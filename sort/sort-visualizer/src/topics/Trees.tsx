import React from "react";

const Trees: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Trees: Non-Linear Data Structures</h2>
      <p>
        A <b>tree</b> is a hierarchical, non-linear data structure consisting of nodes connected by edges. Each tree has a <b>root</b> node, and every node (except the root) has exactly one parent. Nodes may have zero or more child nodes. Trees are used to represent hierarchical relationships and enable efficient searching, insertion, and deletion operations.
      </p>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Key Concepts</h3>
      <ul className="list-disc ml-6 text-slate-700 space-y-1">
        <li><b>Root:</b> The topmost node in a tree.</li>
        <li><b>Leaf Node:</b> A node with no children.</li>
        <li><b>Level:</b> The distance from the root (root is level 0).</li>
        <li><b>Subtree:</b> Any node and all its descendants.</li>
        <li><b>Height:</b> The number of edges on the longest path from the node to a leaf.</li>
      </ul>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Types of Trees</h3>
      <ul className="list-disc ml-6 text-slate-700 space-y-1">
        <li><b>Binary Tree:</b> Each node has at most two children (left and right).</li>
        <li><b>Binary Search Tree (BST):</b> A binary tree where left child &lt; parent &lt; right child.</li>
        <li><b>B-Tree:</b> A self-balancing search tree used in databases and filesystems.</li>
        <li><b>AVL Tree:</b> A self-balancing BST where heights of subtrees differ by at most 1.</li>
        <li><b>Trie (Prefix Tree):</b> Used for efficient retrieval of strings (e.g., autocomplete).</li>
        <li><b>Heap:</b> A complete binary tree used for priority queues.</li>
      </ul>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Tree Traversal</h3>
      <p>Traversal means visiting all nodes in a tree in a specific order. The main types are:</p>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li><b>Breadth-First Search (BFS):</b> Level-order traversal using a queue.</li>
        <li><b>Depth-First Search (DFS):</b> Includes Preorder, Inorder, and Postorder traversals.</li>
      </ul>
      <div className="mb-6">
        <h4 className="font-semibold text-slate-700 mb-1">BFS (Level Order)</h4>
        <p className="mb-2">Visits nodes level by level from top to bottom, left to right. Used in shortest path algorithms and serialization.</p>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-sm max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
`}</pre>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-slate-700 mb-1">DFS: Preorder Traversal</h4>
        <p className="mb-2">Visit the root, then left subtree, then right subtree. <b>Application:</b> Used to copy a tree, prefix expression evaluation.</p>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-sm max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}
`}</pre>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-slate-700 mb-1">DFS: Inorder Traversal</h4>
        <p className="mb-2">Visit the left subtree, then root, then right subtree. <b>Application:</b> In BSTs, yields values in sorted order.</p>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-sm max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}
`}</pre>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-slate-700 mb-1">DFS: Postorder Traversal</h4>
        <p className="mb-2">Visit the left subtree, then right subtree, then root. <b>Application:</b> Used to delete a tree, postfix expression evaluation.</p>
        <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-sm max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}
`}</pre>
      </div>
      <div className="flex flex-col items-center mt-4">
        <span className="font-mono text-xs text-slate-500 mb-1">Visual: Binary Tree Example</span>
        <svg width="320" height="120" viewBox="0 0 320 120">
          <g>
            <circle cx="160" cy="30" r="18" fill="#38bdf8" />
            <text x="160" y="36" textAnchor="middle" fontSize="16" fill="#fff">8</text>
            <circle cx="80" cy="80" r="16" fill="#818cf8" />
            <text x="80" y="86" textAnchor="middle" fontSize="14" fill="#fff">3</text>
            <circle cx="240" cy="80" r="16" fill="#818cf8" />
            <text x="240" y="86" textAnchor="middle" fontSize="14" fill="#fff">10</text>
            <circle cx="60" cy="110" r="13" fill="#f472b6" />
            <text x="60" y="115" textAnchor="middle" fontSize="12" fill="#fff">1</text>
            <circle cx="100" cy="110" r="13" fill="#f472b6" />
            <text x="100" y="115" textAnchor="middle" fontSize="12" fill="#fff">6</text>
            <circle cx="220" cy="110" r="13" fill="#f472b6" />
            <text x="220" y="115" textAnchor="middle" fontSize="12" fill="#fff">9</text>
            <circle cx="260" cy="110" r="13" fill="#f472b6" />
            <text x="260" y="115" textAnchor="middle" fontSize="12" fill="#fff">14</text>
            <line x1="160" y1="30" x2="80" y2="80" stroke="#64748b" strokeWidth="2" />
            <line x1="160" y1="30" x2="240" y2="80" stroke="#64748b" strokeWidth="2" />
            <line x1="80" y1="80" x2="60" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="80" y1="80" x2="100" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="240" y1="80" x2="220" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="240" y1="80" x2="260" y2="110" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Constructing a BST from an Array</h3>
      <p>Given an array of values, you can build a BST by inserting each value in order. For example, given <code>[8, 3, 10, 1, 6, 9, 14]</code>:</p>
      <pre className="bg-[#e0e7ff] rounded-xl p-3 border-blue-600 border-2 text-sm max-w-full break-words whitespace-pre-wrap overflow-x-auto">{`
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (!root) return new TreeNode(value);
  if (value < root.value) root.left = insert(root.left, value);
  else root.right = insert(root.right, value);
  return root;
}

let root = null;
const arr = [8, 3, 10, 1, 6, 9, 14];
for (const v of arr) {
  root = insert(root, v);
}
`}</pre>
      <div className="flex flex-col items-center mt-4">
        <span className="font-mono text-xs text-slate-500 mb-1">Visual: BST built from [8, 3, 10, 1, 6, 9, 14]</span>
        <svg width="320" height="120" viewBox="0 0 320 120">
          <g>
            <circle cx="160" cy="30" r="18" fill="#38bdf8" />
            <text x="160" y="36" textAnchor="middle" fontSize="16" fill="#fff">8</text>
            <circle cx="80" cy="80" r="16" fill="#818cf8" />
            <text x="80" y="86" textAnchor="middle" fontSize="14" fill="#fff">3</text>
            <circle cx="240" cy="80" r="16" fill="#818cf8" />
            <text x="240" y="86" textAnchor="middle" fontSize="14" fill="#fff">10</text>
            <circle cx="60" cy="110" r="13" fill="#f472b6" />
            <text x="60" y="115" textAnchor="middle" fontSize="12" fill="#fff">1</text>
            <circle cx="100" cy="110" r="13" fill="#f472b6" />
            <text x="100" y="115" textAnchor="middle" fontSize="12" fill="#fff">6</text>
            <circle cx="220" cy="110" r="13" fill="#f472b6" />
            <text x="220" y="115" textAnchor="middle" fontSize="12" fill="#fff">9</text>
            <circle cx="260" cy="110" r="13" fill="#f472b6" />
            <text x="260" y="115" textAnchor="middle" fontSize="12" fill="#fff">14</text>
            <line x1="160" y1="30" x2="80" y2="80" stroke="#64748b" strokeWidth="2" />
            <line x1="160" y1="30" x2="240" y2="80" stroke="#64748b" strokeWidth="2" />
            <line x1="80" y1="80" x2="60" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="80" y1="80" x2="100" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="240" y1="80" x2="220" y2="110" stroke="#64748b" strokeWidth="2" />
            <line x1="240" y1="80" x2="260" y2="110" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Real Life Scenarios & Applications</h3>
      <ul className="list-disc ml-6 text-slate-700 space-y-1">
        <li>File system hierarchies (folders and files)</li>
        <li>HTML/XML document structure (DOM tree)</li>
        <li>Database indexing (B-trees, B+ trees)</li>
        <li>Autocomplete and spell-check (Tries)</li>
        <li>Network routing protocols</li>
        <li>AI decision trees and game trees</li>
      </ul>
    </section>
    <section>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Next: Binary Search Trees (BSTs)</h3>
      <p>
        A <b>Binary Search Tree</b> is a special type of binary tree where each node's left child is less than the node and the right child is greater. BSTs allow fast lookup, insertion, and deletion.
      </p>
    </section>
  </div>
);

export default Trees;
