import React from "react";
import { Typography, Box } from "@mui/material";

const StackTopic: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Stack
    </Typography>
    <Typography paragraph>
      A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the top of the stack only.
    </Typography>
    <Typography paragraph>
      <b>Example (TypeScript):</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`const stack = [];
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20 (removes the top)`}
    </Box>
    <div className="mb-4">
      <b>Visual Representation:</b>
      <div className="flex flex-col-reverse items-center gap-2 mt-2">
        {["10", "20", "30"].map((val, idx) => (
          <div key={idx} className="w-24 h-10 border-2 border-purple-400 bg-purple-100 flex items-center justify-center text-lg font-bold rounded">
            {val}
          </div>
        ))}
        <div className="text-xs text-gray-600 mt-1">Top</div>
      </div>
      <div className="text-xs text-gray-600 mt-2">Push adds to the top, Pop removes from the top.</div>
    </div>
    <Typography paragraph>
      Stacks are used in function call management, undo operations, and syntax parsing.
    </Typography>
  </>
);

export default StackTopic;
