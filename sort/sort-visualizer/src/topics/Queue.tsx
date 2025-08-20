import React from "react";
import { Typography, Box } from "@mui/material";

const QueueTopic: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Queue
    </Typography>
    <Typography paragraph>
      A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front.
    </Typography>
    <Typography paragraph>
      <b>Example (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`const queue = [];
queue.push(10); // enqueue
queue.push(20);
console.log(queue.shift()); // 10 (dequeue)`}
    </Box>
    <div className="mb-4">
      <b>Visual Representation:</b>
      <div className="flex flex-row gap-2 mt-2 items-end">
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Front</span>
          <div className="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center text-lg font-bold rounded">10</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">&nbsp;</span>
          <div className="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center text-lg font-bold rounded">20</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Rear</span>
          <div className="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center text-lg font-bold rounded">30</div>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-2">Enqueue adds to the rear, Dequeue removes from the front.</div>
    </div>
    <Typography paragraph>
      <b>DeQueue (Double-Ended Queue):</b> A DeQueue (or deque) is a special type of queue where elements can be added or removed from both the front and the rear. This makes it more flexible than a standard queue. For example:
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#ffe4e6', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #f472b6', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`const deque = [];
deque.push(10);      // add to rear
deque.unshift(5);    // add to front
deque.push(20);      // add to rear
console.log(deque.pop());   // remove from rear (20)
console.log(deque.shift()); // remove from front (5)`}
    </Box>
    <div className="mb-4">
      <b>DeQueue Visual:</b>
      <div className="flex flex-row gap-2 mt-2 items-end">
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Front</span>
          <div className="w-12 h-12 border-2 border-pink-400 bg-pink-100 flex items-center justify-center text-lg font-bold rounded">5</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">&nbsp;</span>
          <div className="w-12 h-12 border-2 border-pink-400 bg-pink-100 flex items-center justify-center text-lg font-bold rounded">10</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Rear</span>
          <div className="w-12 h-12 border-2 border-pink-400 bg-pink-100 flex items-center justify-center text-lg font-bold rounded">20</div>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-2">DeQueue allows adding/removing from both ends.</div>
    </div>
    <Typography paragraph>
      Queues are used in scheduling, buffering, and breadth-first search algorithms. DeQueues are useful for problems requiring flexible insertion/removal, like sliding window algorithms.
    </Typography>
    <Typography paragraph>
      Queues are used in scheduling, buffering, and breadth-first search algorithms.
    </Typography>
  </>
);

export default QueueTopic;
