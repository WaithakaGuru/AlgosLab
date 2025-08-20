import DoublyLinkedList from "./topics/DoublyLinkedList";
import SinglyLinkedList from "./topics/SinglyLinkedList";
import React, { useState } from "react";
import { Box, Typography, Drawer, Divider, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Sidebar, { sidebarData } from "./Sidebar";
import UnionTypes from "./topics/UnionTypes";
import ConjunctionTypes from "./topics/ConjunctionTypes";
import Generics from "./topics/Generics";
import BuiltInUtilityTypes from "./topics/BuiltInUtilityTypes";
import AdvancedTypingConcepts from "./topics/AdvancedTypingConcepts";
import MappedTypes from "./topics/MappedTypes";
import ConditionalTypes from "./topics/ConditionalTypes";
import Arrays from "./topics/Arrays";
import StackTopic from "./topics/Stack";
import QueueTopic from "./topics/Queue";

// Helper to flatten sidebarData for topic selection
function getAllTopics() {
  const topics: string[] = [];
  sidebarData.forEach((section: any) => {
    if (section.subtopics) {
      section.subtopics.forEach((sub: string) => topics.push(sub));
    }
    if (section.children) {
      section.children.forEach((child: any) => {
        if (child.subtopics) {
          child.subtopics.forEach((sub: string) => topics.push(sub));
        }
      });
    }
  });
  return topics;
}

function getMajorTopic(selected: string): string | undefined {
  for (const section of sidebarData as any[]) {
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
  for (const section of sidebarData as any[]) {
    if (section.children) {
      for (const child of section.children) {
        if (child.subtopics && child.subtopics.includes(selected)) {
          return child.label;
        }
      }
    }
        // Removed old sidebar rendering logic
  }
  return undefined;
}


const AlgorithmInfo: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // State for open/close dropdowns and selected topic
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string>(getAllTopics()[0]);
  const parentSubtopic = getParentSubtopic(selected);
  const allSubtopics = getAllTopics();
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

  // Drawer width logic
  const drawerWidth = isMdUp ? 300 : 200;
  const drawerDisplay = isXs ? "none" : "block";

  // --- Content for topics ---
  const topicContent: Record<string, React.ReactNode> = {
    "Union Types": <UnionTypes />,
    "Conjunction Types": <ConjunctionTypes />,
    "Generics": <Generics />,
    "Built-In Utility Types": <BuiltInUtilityTypes />,
    "Advanced Typing Concepts": <AdvancedTypingConcepts />,
    "Mapped Types": <MappedTypes />,
    "Conditional Types": <ConditionalTypes />,
    "Arrays": <Arrays />,
    "Stack": <StackTopic />,
  "Queue": <QueueTopic />,
  "Singly Linked List": <SinglyLinkedList />,
  "Doubly Linked List": <DoublyLinkedList />,
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
          <Sidebar
            selected={selected}
            setSelected={setSelected}
            open={open}
            handleToggle={handleToggle}
            parentSubtopic={parentSubtopic}
          />
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
