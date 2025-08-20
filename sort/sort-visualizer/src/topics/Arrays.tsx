import React from "react";
import { Typography, Box } from "@mui/material";

const Arrays: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Arrays
    </Typography>
    <Typography paragraph>
      Arrays are the most basic linear data structure. They store elements in a contiguous block of memory and allow fast access by index. Arrays are fixed in size in many languages, but in JavaScript/TypeScript, arrays are dynamic and can grow or shrink.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr[2]); // 3
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]`}
    </Box>
    <Typography paragraph>
      Arrays are used as the foundation for many other data structures, including stacks, queues, and lists.
    </Typography>
  </>
);

export default Arrays;
