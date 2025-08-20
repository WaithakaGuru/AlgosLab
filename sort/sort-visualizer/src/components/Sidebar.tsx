import React from "react";
import { List, ListItem, ListItemText, Collapse, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

// Sidebar topics and subtopics structure
export const sidebarData = [
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
          "Arrays",
          "Stack",
          "Queue",
          "Singly Linked List",
          "Doubly Linked List",
          "Circular Linked List",
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

interface SidebarProps {
  selected: string;
  setSelected: (topic: string) => void;
  open: { [key: string]: boolean };
  handleToggle: (label: string) => void;
  parentSubtopic: string | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, setSelected, open, handleToggle, parentSubtopic }) => {
  // Render subtopics as clickable list
  const renderSubtopics = (subtopics: string[]) => (
    <List component="div" disablePadding>
      {subtopics.map((sub, idx) => (
        <ListItemButton
          key={sub}
          selected={selected === sub}
          onClick={() => setSelected(sub)}
          sx={{ pl: 2 }}
        >
          <ListItemText
            primary={<span>{String.fromCharCode(97 + idx) + ". "}{sub}</span>}
          />
        </ListItemButton>
      ))}
    </List>
  );

  // Render sidebar recursively
  return (
    <List>
      {(sidebarData as any[]).map((section) => {
        const isMajorSelected = false; // Selection highlight handled in parent if needed
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
                  {section.children.map((child: any) => {
                    const isParentSelected = parentSubtopic === child.label;
                    return (
                      <React.Fragment key={child.label}>
                        <ListItemButton
                          onClick={() => handleToggle(child.label)}
                          sx={{
                            pl: 1,
                            ml: isParentSelected? 1 : undefined,
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
};

export default Sidebar;
