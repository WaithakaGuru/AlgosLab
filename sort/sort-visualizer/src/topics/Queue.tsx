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
      {`export default class Queue<T> {
  private queueItems: T[] = [];

  add(item: T) {
    return this.queueItems.push(item);
  }

  remove(): T | undefined {
    return this.queueItems.shift();
  }

  peek(): T | undefined {
    return this.queueItems[0];
  }

  peekLast(): T | undefined {
    return this.queueItems[this.queueItems.length - 1];
  }

  len() {
    return this.queueItems.length;
  }
}`}
    </Box>
    <Typography paragraph>
      Queues are used in scheduling, buffering, and breadth-first search algorithms.
    </Typography>
  </>
);

export default QueueTopic;
