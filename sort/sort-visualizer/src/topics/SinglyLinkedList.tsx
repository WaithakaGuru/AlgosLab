import { Typography, Box } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

const SinglyLinkedList= () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Singly Linked List
    </Typography>
    <Typography component="p" gutterBottom>
      A <b>singly linked list</b> is a linear data structure where each element (node) contains a value and a reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations.
    </Typography>
    <Typography component="p" gutterBottom>
      <b>Node Structure (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}`}
    </Box>
    <Typography component="p" gutterBottom>
      <b>SinglyLinkedList Class (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`class SinglyLinkedList<T> {
  head: ListNode<T> | null = null;

  insertAtEnd(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}`}
    </Box>
    <Typography component="p" gutterBottom>
      <b>Visual Representation:</b>
    </Typography>
    <div className="flex flex-row items-center gap-1 md:gap-4 mb-4">
      {[1, 2, 3, 4].map((val, idx, arr) => (
        < Fragment key={val}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-12 border-2 border-cyan-400 bg-cyan-100 flex items-center justify-center text-lg font-bold rounded">
              {val}
            </div>
            <span className="text-xs mt-1">Node {idx + 1}</span>
          </div>
          {idx < arr.length - 1 && (
            <span className="text-2xl text-cyan-600">→</span>
          )}
        </ Fragment>
      ))}
      <span className="text-xs text-gray-500 ml-2">null</span>
    </div>
    <Typography component="p" gutterBottom>
      Each node points to the next node. The last node points to <b>null</b>, indicating the end of the list.
    </Typography>
    <Typography component="p" gutterBottom>
      <b>Key Operations:</b>
      <ul className="list-disc ml-6 mt-2">
        <li><b>Insertion</b>: Add a node at the beginning, end, or after a given node.</li>
        <li><b>Deletion</b>: Remove a node by value or position.</li>
        <li><b>Traversal</b>: Visit each node from head to tail.</li>
      </ul>
    </Typography>
    <Typography component="p" gutterBottom>
      Singly linked lists are useful for dynamic memory allocation, implementing stacks/queues, and when frequent insertions/deletions are needed.
    </Typography>
  </>
);

export default SinglyLinkedList;