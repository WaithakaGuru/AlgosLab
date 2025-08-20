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
      {`export default class Stack<T> {
  private stackItems: T[] = [];

  add(item: T) {
    return this.stackItems.push(item);
  }

  remove() {
    return this.stackItems.pop();
  }

  peek(): T | undefined {
    return this.stackItems[this.stackItems.length-1];
  }

  peekLast(): T | undefined {
    return this.stackItems[0];
  }

  len() {
    return this.stackItems.length;
  }
}`}
    </Box>
    <Typography paragraph>
      Stacks are used in function call management, undo operations, and syntax parsing.
    </Typography>
  </>
);

export default StackTopic;
