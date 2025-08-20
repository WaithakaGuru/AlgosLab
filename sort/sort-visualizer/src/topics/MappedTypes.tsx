import React from "react";
import { Typography, Box } from "@mui/material";

const MappedTypes: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Mapped Types in TypeScript
    </Typography>
    <Typography paragraph>
      Mapped types allow you to create new types by transforming properties of an existing type. They are often used with <code>keyof</code> and <code>in</code>.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
}

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
}
`}
    </Box>
    <Typography paragraph>
      In this example, <code>ReadonlyPerson</code> is a mapped type that makes all properties of <code>Person</code> readonly.
    </Typography>
  </>
);

export default MappedTypes;
