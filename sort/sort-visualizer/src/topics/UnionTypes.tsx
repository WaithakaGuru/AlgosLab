import React from "react";
import { Typography, Box } from "@mui/material";

const UnionTypes: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Union Types in TypeScript
    </Typography>
    <Typography paragraph>
      Union types allow a variable to be one of several types. This is achieved using the <b>|</b> (pipe) character. Union types are useful when a value can be of multiple types, but only one at a time.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type numWord = number | string;
const a: numWord = 8;
const b: numWord = "waithaka";

type Role = "Admin" | "user"
const employee1: Role = "Admin";
const employee2: Role = "user"
// const employee3: Role = "employee" -- error -- type Role only accepts two values either "Admin" or "user"`}
    </Box>
    <Typography paragraph>
      In the above example, <code>numWord</code> can be either a <b>number</b> or a <b>string</b>. The <code>Role</code> type restricts the value to only "Admin" or "user".
    </Typography>
  </>
);

export default UnionTypes;
