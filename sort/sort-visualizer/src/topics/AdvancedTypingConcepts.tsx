import React from "react";
import { Typography, Box } from "@mui/material";

const AdvancedTypingConcepts: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Advanced Typing Concepts: <code>keyof</code> and <code>typeof</code>
    </Typography>
    <Typography paragraph>
      <b>keyof</b> is used to get a union of all property names of a type. <b>typeof</b> is used to get the type of a variable or property.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const amos = {
  name: "Amos",
  age: 18
};

type AmosType = typeof amos; // { name: string; age: number }
`}
    </Box>
    <Typography paragraph>
      <code>keyof Person</code> gives the union of property names (<b>"name" | "age"</b>). <code>typeof amos</code> gives the type of the <b>amos</b> variable.
    </Typography>
  </>
);

export default AdvancedTypingConcepts;
