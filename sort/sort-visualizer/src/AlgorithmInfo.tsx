import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  ListItemButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

// Sidebar topics and subtopics structure
const sidebarData = [
  {
    label: "Advanced Typing(TS)",
    underline: true,
    subtopics: [
      "Union Types",
      "Conjunction Types",
      "Generics",
      "Built-In Utility Types",
      "Advanced Typing Concepts",
      "Mapped Types",
      "Conditional Types",
    ],
  },
  {
    label: "Data Structures",
    underline: true,
    children: [
      {
        label: "Linear Data Structures",
        subtopics: [
          "Stack",
          "Queue",
          "Singly Linked List",
          "Doubly Linked List",
        ],
      },
      {
        label: "NonLinear Data Structures",
        subtopics: [
          "Trees",
          "Heaps",
          "Graphs",
        ],
      },
    ],
  },
  {
    label: "Algorithms",
    underline: true,
    children: [
      {
        label: "Search",
        subtopics: ["Linear Search", "Binary Search", "Interpolation Search"],
      },
      {
        label: "Sort",
        subtopics: [
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Merge Sort",
          "Quick Sort",
          "Heap Sort",
          "Bucket Sort",
        ],
      },
    ],
  },
];

// Helper to flatten sidebarData for topic selection
function getAllTopics() {
  const topics: string[] = [];
  sidebarData.forEach((section) => {
    if (section.subtopics) {
      section.subtopics.forEach((sub) => topics.push(sub));
    }
    if (section.children) {
      section.children.forEach((child) => {
        if (child.subtopics) {
          child.subtopics.forEach((sub) => topics.push(sub));
        }
      });
    }
  });
  return topics;
}

function getMajorTopic(selected: string): string | undefined {
  for (const section of sidebarData) {
    if (section.subtopics && section.subtopics.includes(selected)) return section.label;
    if (section.children) {
      for (const child of section.children) {
        if (child.subtopics && child.subtopics.includes(selected)) return section.label;
      }
    }
  }
  return undefined;
}

// Helper to get the parent subtopic label for a selected topic
function getParentSubtopic(selected: string): string | undefined {
  for (const section of sidebarData) {
    if (section.children) {
      for (const child of section.children) {
        if (child.subtopics && child.subtopics.includes(selected)) {
          return child.label;
        }
      }
    }
  }
  return undefined;
}

// Helper to get the flat list of all subtopics in order
function getAllSubtopics() {
  const subtopics: string[] = [];
  sidebarData.forEach((section) => {
    if (section.subtopics) subtopics.push(...section.subtopics);
    if (section.children) {
      section.children.forEach((child) => {
        if (child.subtopics) subtopics.push(...child.subtopics);
      });
    }
  });
  return subtopics;
}

const AlgorithmInfo: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // State for open/close dropdowns and selected topic
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string>(getAllTopics()[0]);
  const parentSubtopic = getParentSubtopic(selected);
  const allSubtopics = getAllSubtopics();
  const currentIdx = allSubtopics.indexOf(selected);

  // Toggle dropdowns
  const handleToggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handlePrev = () => {
    if (currentIdx > 0) setSelected(allSubtopics[currentIdx - 1]);
  };
  const handleNext = () => {
    if (currentIdx < allSubtopics.length - 1) setSelected(allSubtopics[currentIdx + 1]);
  };

  // Render subtopics as clickable list with a., b., ...
  const renderSubtopics = (subtopics: string[]) => (
    <List component="div" disablePadding>
      {subtopics.map((sub, idx) => (
        <ListItemButton
          key={sub}
          selected={selected === sub}
          onClick={() => setSelected(sub)}
          sx={{ pl: 4 }}
        >
          <ListItemText
            primary={<span>{String.fromCharCode(97 + idx) + ". "}{sub}</span>}
          />
        </ListItemButton>
      ))}
    </List>
  );

  // Render sidebar recursively
  const renderSidebar = () => (
    <List>
      {sidebarData.map((section) => {
        const isMajorSelected = getMajorTopic(selected) === section.label;
        return (
          <React.Fragment key={section.label}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  section.subtopics || section.children
                    ? handleToggle(section.label)
                    : undefined
                }
                sx={{
                  fontWeight: section.underline ? "bold" : undefined,
                  bgcolor: isMajorSelected ? "#cbd5e1" : undefined,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={
                    <span
                      style={{
                        textDecoration: section.underline ? "underline" : undefined,
                        fontWeight: section.underline || section.label === "Advanced Typing(TS)" ? "bold" : undefined,
                        textUnderlineOffset: section.underline || section.label === "Advanced Typing(TS)" ? 4 : undefined,
                        color: section.label === "Advanced Typing(TS)" ? "#1e293b" : undefined,
                      }}
                    >
                      {section.label}
                    </span>
                  }
                />
                {(section.subtopics || section.children) ? (
                  open[section.label] ? <ExpandLess /> : <ExpandMore />
                ) : null}
              </ListItemButton>
            </ListItem>
            {/* Subtopics for top-level section */}
            {section.subtopics && (
              <Collapse in={!!open[section.label]} timeout="auto" unmountOnExit>
                {renderSubtopics(section.subtopics)}
              </Collapse>
            )}
            {/* Children (e.g. Linear/NonLinear Data Structures, Search/Sort) */}
            {section.children && (
              <Collapse in={!!open[section.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {section.children.map((child) => {
                    const isParentSelected = parentSubtopic === child.label;
                    return (
                      <React.Fragment key={child.label}>
                        <ListItemButton
                          onClick={() => handleToggle(child.label)}
                          sx={{
                            pl: 3,
                            border: isParentSelected ? "2px dashed #1e293b" : undefined,
                            borderRadius: isParentSelected ? 1 : undefined,
                            my: isParentSelected ? ".5rem" : undefined,
                          }}
                        >
                          <ListItemText primary={child.label} />
                          {child.subtopics ? (
                            open[child.label] ? <ExpandLess /> : <ExpandMore />
                          ) : null}
                        </ListItemButton>
                        {child.subtopics && (
                          <Collapse in={!!open[child.label]} timeout="auto" unmountOnExit>
                            {renderSubtopics(child.subtopics)}
                          </Collapse>
                        )}
                      </React.Fragment>
                    );
                  })}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );

  // Drawer width logic
  const drawerWidth = isMdUp ? 300 : 200;
  const drawerDisplay = isXs ? "none" : "block";

  // --- Content for topics ---
  const topicContent: Record<string, React.ReactNode> = {
    "Union Types": (
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

// the types can also be definite values e.g words or numbers 
type Role = "Admin" | "user"
const employee1: Role = "Admin";
const employee2: Role = "user"
// const employee3: Role = "employee" -- error -- type Role only accepts two values either "Admin" or "user"`}
        </Box>
        <Typography paragraph>
          In the above example, <code>numWord</code> can be either a <b>number</b> or a <b>string</b>. The <code>Role</code> type restricts the value to only "Admin" or "user".
        </Typography>
      </>
    ),
    "Conjunction Types": (
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
    ),
    "Generics": (
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
    ),
    "Built-In Utility Types": (
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
    ),
    "Advanced Typing Concepts": (
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
    ),
    "Mapped Types": (
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
    ),
    "Conditional Types": (
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
    ),
    // ...other topics...
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f1f5f9" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: drawerDisplay,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#e2e8f0",
            borderRight: "1px solid #cbd5e1",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" fontWeight="bold" color="#334155" gutterBottom>
            Topics
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {renderSidebar()}
        </Box>
      </Drawer>
      {/* Main content area */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#334155" gutterBottom>
          {selected}
        </Typography>
        {topicContent[selected] || (
          <Typography color="text.secondary">Select a topic to view details.</Typography>
        )}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button variant="outlined" onClick={handlePrev} disabled={currentIdx <= 0}>
            Previous
          </Button>
          <Button variant="contained" onClick={handleNext} disabled={currentIdx === allSubtopics.length - 1}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AlgorithmInfo;
