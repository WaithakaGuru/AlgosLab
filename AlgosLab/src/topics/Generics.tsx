import React from "react";
import { Typography, Box } from "@mui/material";

const Generics: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Generics in TypeScript
    </Typography>
    <Typography paragraph>
      Generics allow you to write reusable, type-safe code without restricting to a single data type. They enable you to create components, functions, or classes that work with any data type, while still maintaining type safety.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`interface collection<T> {
  items: T[]
}

// to create a collection of numbers using the collection interface
const numCollection: collection<number> = {
  items: [3,4,5,6,7]
}

// to create a collection of strings using the collection interface
const wordCollection: collection<string> = {
  items: ["one", " Two", "Three"]
}`}
    </Box>
    <Typography paragraph>
      In this example, <code>collection&lt;T&gt;</code> is a generic interface. You can create collections of any type (e.g., <b>number</b>, <b>string</b>) by specifying the type parameter.
    </Typography>
  </>
);

export default Generics;
