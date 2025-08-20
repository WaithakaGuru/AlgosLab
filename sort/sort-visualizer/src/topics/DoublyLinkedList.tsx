import React from "react";
import { Typography, Box } from "@mui/material";

const DoublyLinkedList: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Doubly Linked List
    </Typography>
    <Typography component="p" gutterBottom>
      A <b>doubly linked list</b> is a linear data structure where each node contains a value, a pointer to the next node, and a pointer to the previous node. This allows traversal in both directions.
    </Typography>
    <Typography component="p" gutterBottom>
      <b>Node Structure (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`class DoublyListNode<T> {
  value: T;
  next: DoublyListNode<T> | null;
  prev: DoublyListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}`}
    </Box>
    <Typography component="p" gutterBottom>
      <b>DoublyLinkedList Class (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`class DoublyLinkedList<T> {
  head: DoublyListNode<T> | null = null;
  tail: DoublyListNode<T> | null = null;

  insertAtEnd(value: T) {
    const newNode = new DoublyListNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  traverseForward() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  traverseBackward() {
    let curr = this.tail;
    while (curr) {
      console.log(curr.value);
      curr = curr.prev;
    }
  }
}`}
    </Box>
    <Typography component="p" gutterBottom>
      <b>Visual Representation:</b>
    </Typography>
    <div className="flex flex-row items-center gap-4 mb-4">
      {[1, 2, 3, 4].map((val, idx, arr) => (
        <React.Fragment key={val}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-12 border-2 border-pink-400 bg-pink-100 flex items-center justify-center text-lg font-bold rounded">
              {val}
            </div>
            <span className="text-xs mt-1">Node {idx + 1}</span>
          </div>
          {idx < arr.length - 1 && (
            <>
              <span className="text-2xl text-pink-600">⇄</span>
            </>
          )}
        </React.Fragment>
      ))}
      <span className="text-xs text-gray-500 ml-2">null</span>
    </div>
    <Typography component="p" gutterBottom>
      Each node points to both the next and previous nodes. The head's prev and the tail's next are <b>null</b>.
    </Typography>
    <Typography component="p" gutterBottom>
      <b>Key Operations:</b>
      <ul className="list-disc ml-6 mt-2">
        <li><b>Insertion</b>: Add a node at the beginning, end, or after a given node.</li>
        <li><b>Deletion</b>: Remove a node by value or position.</li>
        <li><b>Traversal (forward/backward)</b>: Visit each node from head to tail or tail to head.</li>
      </ul>
    </Typography>
    <Typography component="p" gutterBottom>
      Doubly linked lists are useful when you need efficient bidirectional traversal or frequent insertions/deletions at both ends.
    </Typography>
  </>
);

export default DoublyLinkedList;
