import React from "react";

const CircularLinkedList: React.FC = () => (
  <div className="space-y-6">
    <section>
      <h2 className="text-xl font-bold text-slate-700 mb-2">Circular Linked Lists</h2>
      <p>
        A <b>Circular Linked List</b> is a variation of a linked list in which the last node points back to the first node, forming a circle. This can be implemented for both singly and doubly linked lists.
      </p>
    </section>
    <section>
      <h3 className="text-lg font-semibold text-blue-700 mb-1">Circular Singly Linked List (CSLL)</h3>
      <p>
        In a <b>Circular Singly Linked List</b>, each node has a single next pointer, and the last node's next points to the head node. This allows traversal to loop back to the start without a null reference.
      </p>
      <pre className="bg-slate-100 rounded p-3 overflow-x-auto text-sm"><code>{`
// TypeScript implementation of Circular Singly Linked List
// Each node points to the next, and the last node points to the head
class CSLLNode<T> {
  value: T;
  next: CSLLNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class CircularSinglyLinkedList<T> {
  head: CSLLNode<T> | null = null;

  // Add a node to the end
  append(value: T): void {
    const newNode = new CSLLNode(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next !== this.head) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.next = this.head;
  }

  // Print all values in the list
  print(): void {
    if (!this.head) return;
    let curr = this.head;
    do {
      console.log(curr.value);
      curr = curr.next!;
    } while (curr !== this.head);
  }
}

// Example usage:
const csll = new CircularSinglyLinkedList<number>();
csll.append(10);
csll.append(20);
csll.append(30);
csll.print(); // Output: 10 20 30 (in a loop)
`}</code></pre>
      <p className="mt-2"><b>Use cases:</b> Useful for round-robin scheduling, implementing circular buffers, and applications where wrap-around traversal is needed.</p>
      <section>
        <h4 className="text-md font-semibold text-slate-600 mb-1">Key Operations (CSLL)</h4>
        <ul className="list-disc ml-6 text-slate-700 mb-4">
          <li><b>append(value)</b>: Add a node to the end (maintains circularity)</li>
          <li><b>print()</b>: Traverse and print all nodes in a loop</li>
          <li><b>delete(value)</b>: Remove a node by value (requires careful pointer updates)</li>
          <li><b>insertAfter(node, value)</b>: Insert a new node after a given node</li>
        </ul>
        <div className="flex flex-col items-center mb-4">
          <span className="font-mono text-xs text-slate-500 mb-1">Visual: Circular Singly Linked List</span>
          <svg width="320" height="60" viewBox="0 0 320 60">
            <g>
              <rect x="10" y="20" width="40" height="20" rx="6" fill="#38bdf8" />
              <text x="30" y="35" textAnchor="middle" fontSize="13" fill="#fff">10</text>
              <rect x="70" y="20" width="40" height="20" rx="6" fill="#38bdf8" />
              <text x="90" y="35" textAnchor="middle" fontSize="13" fill="#fff">20</text>
              <rect x="130" y="20" width="40" height="20" rx="6" fill="#38bdf8" />
              <text x="150" y="35" textAnchor="middle" fontSize="13" fill="#fff">30</text>
              <path d="M50 30 Q60 30 70 30" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <path d="M110 30 Q120 30 130 30" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <path d="M170 30 Q200 50 30 50 Q10 50 30 30" stroke="#0ea5e9" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#0ea5e9" />
                </marker>
              </defs>
            </g>
          </svg>
        </div>
      </section>
    </section>
    <section>
      <h3 className="text-lg font-semibold text-blue-700 mb-1">Circular Doubly Linked List (CDLL)</h3>
      <p>
        In a <b>Circular Doubly Linked List</b>, each node has both next and prev pointers, and the last node's next points to the head, while the head's prev points to the last node. This allows bidirectional circular traversal.
      </p>
      <h4 className="text-md font-semibold text-slate-600 mb-1">Key Operations (CDLL)</h4>
      <ul className="list-disc ml-6 text-slate-700 mb-4">
        <li><b>append(value)</b>: Add a node to the end (maintains circularity in both directions)</li>
        <li><b>printForward()</b>: Traverse and print all nodes forward</li>
        <li><b>printBackward()</b>: Traverse and print all nodes backward</li>
        <li><b>delete(value)</b>: Remove a node by value (update both next and prev)</li>
        <li><b>insertAfter(node, value)</b>: Insert a new node after a given node</li>
      </ul>
      <div className="flex flex-col items-center mb-4">
        <span className="font-mono text-xs text-slate-500 mb-1">Visual: Circular Doubly Linked List</span>
        <svg width="340" height="80" viewBox="0 0 340 80">
          <g>
            <rect x="10" y="30" width="40" height="20" rx="6" fill="#818cf8" />
            <text x="30" y="45" textAnchor="middle" fontSize="13" fill="#fff">A</text>
            <rect x="80" y="30" width="40" height="20" rx="6" fill="#818cf8" />
            <text x="100" y="45" textAnchor="middle" fontSize="13" fill="#fff">B</text>
            <rect x="150" y="30" width="40" height="20" rx="6" fill="#818cf8" />
            <text x="170" y="45" textAnchor="middle" fontSize="13" fill="#fff">C</text>
            <path d="M50 40 Q65 40 80 40" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#arrowf)" />
            <path d="M120 40 Q135 40 150 40" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#arrowf)" />
            <path d="M190 40 Q250 70 30 70 Q10 70 30 40" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#arrowf)" />
            <path d="M150 60 Q135 60 120 60" stroke="#f472b6" strokeWidth="2" fill="none" markerEnd="url(#arrowb)" />
            <path d="M80 60 Q65 60 50 60" stroke="#f472b6" strokeWidth="2" fill="none" markerEnd="url(#arrowb)" />
            <path d="M10 60 Q-30 10 190 10 Q210 10 190 40" stroke="#f472b6" strokeWidth="2" fill="none" markerEnd="url(#arrowb)" />
            <defs>
              <marker id="arrowf" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#6366f1" />
              </marker>
              <marker id="arrowb" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#f472b6" />
              </marker>
            </defs>
          </g>
        </svg>
      </div>
    </section>
  </div>
);

export default CircularLinkedList;
