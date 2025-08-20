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

const AlgorithmInfo: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // State for open/close dropdowns and selected topic
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<string>(getAllTopics()[0]);
  const parentSubtopic = getParentSubtopic(selected);

  // Toggle dropdowns
  const handleToggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
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
        {/* Render selected topic info here */}
      </Box>
    </Box>
  );
};

export default AlgorithmInfo;
