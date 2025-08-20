import React from "react";
import { Typography, Box } from "@mui/material";

const ConditionalTypes: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Conditional Types in TypeScript
    </Typography>
    <Typography paragraph>
      Conditional types allow you to define a type based on a condition. They use the syntax <code>T extends U ? X : Y</code> and are useful for creating flexible, type-safe APIs.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"`}
    </Box>
    <Typography paragraph>
      In this example, <code>IsString&lt;T&gt;</code> checks if <code>T</code> is a <b>string</b>. If so, the type is <b>"Yes"</b>, otherwise <b>"No"</b>.
    </Typography>
  </>
);

export default ConditionalTypes;
