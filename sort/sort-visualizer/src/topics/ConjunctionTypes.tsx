import React from "react";
import { Typography, Box } from "@mui/material";

const ConjunctionTypes: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Conjunction (Intersection) Types in TypeScript
    </Typography>
    <Typography paragraph>
      Conjunction types (also called intersection types) allow you to combine multiple types into one. A variable of an intersection type must satisfy all the combined types. This is achieved using the <b>&</b> (ampersand) character.
    </Typography>
    <Typography paragraph>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type employee = {
  id: number,
  name: string
}
type User = employee & { role: Role }

const user1: User = {
  id: 4532,
  name: "Amos",
  role: "Admin"
}`}
    </Box>
    <Typography paragraph>
      In this example, <code>User</code> must have all properties of <code>employee</code> and also a <code>role</code> property. This is useful for building up complex types from simpler ones.
    </Typography>
  </>
);

export default ConjunctionTypes;
