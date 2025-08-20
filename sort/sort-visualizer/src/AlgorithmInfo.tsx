import React from "react";
import { Box, Typography, Drawer, List, ListItem, ListItemText, Collapse, Divider } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

// Sidebar topics and subtopics structure
const sidebarData = [
  {
    label: "Advanced Typing in TypeScript",
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

const AlgorithmInfo: React.FC = () => {
  // ...state for open/close dropdowns, selected topic, etc...
  // ...render sidebar and main content area...
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f1f5f9" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 300,
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
          {/* Render sidebarData here as nested lists with dropdowns */}
        </Box>
      </Drawer>
      {/* Main content area */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#334155" gutterBottom>
          Algorithm & Data Structure Info
        </Typography>
        {/* Render selected topic info here */}
      </Box>
    </Box>
  );
};

export default AlgorithmInfo;
