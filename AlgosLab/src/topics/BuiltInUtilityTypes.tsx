import React from "react";
import { Typography, Box } from "@mui/material";

const BuiltInUtilityTypes: React.FC = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Built-In Utility Types in TypeScript
    </Typography>
    <Typography paragraph>
      TypeScript provides several built-in utility types to help transform and compose types. Here are the most common ones, with explanations and examples:
    </Typography>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Partial&lt;T&gt;</Typography>
    <Typography paragraph>
      Makes all properties in <code>T</code> optional.
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
}

const partialPerson: Partial<Person> = { name: "Amos" }; // age is optional`}
    </Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Readonly&lt;T&gt;</Typography>
    <Typography paragraph>
      Makes all properties in <code>T</code> read-only (cannot be reassigned).
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
}

const readonlyPerson: Readonly<Person> = { name: "Amos", age: 18 };
// readonlyPerson.age = 20; // Error: Cannot assign to 'age' because it is a read-only property.`}
    </Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Required&lt;T&gt;</Typography>
    <Typography paragraph>
      Makes all properties in <code>T</code> required (removes <code>?</code> from optional properties).
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name?: string;
  age?: number;
}

const requiredPerson: Required<Person> = { name: "Amos", age: 18 }; // Both required`}
    </Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Omit&lt;T, K&gt;</Typography>
    <Typography paragraph>
      Constructs a type by picking all properties from <code>T</code> and then removing <code>K</code>.
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
  gender: string;
}

type PersonWithoutAge = Omit<Person, "age">;
const p: PersonWithoutAge = { name: "Amos", gender: "male" };`}
    </Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Pick&lt;T, K&gt;</Typography>
    <Typography paragraph>
      Constructs a type by picking the set of properties <code>K</code> from <code>T</code>.
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Person = {
  name: string;
  age: number;
  gender: string;
}

type PersonName = Pick<Person, "name">;
const p: PersonName = { name: "Amos" };`}
    </Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Record&lt;K, V&gt;</Typography>
    <Typography paragraph>
      Constructs an object type whose property keys are <code>K</code> and property values are <code>V</code>.
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`type Roles = "admin" | "user";
type RolePermissions = Record<Roles, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"]
};`}
    </Box>
  </>
);

export default BuiltInUtilityTypes;
