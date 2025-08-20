import React, { useState } from "react";
import Sidebar, { sidebarData } from "../components/Sidebar"
import DoublyLinkedList from "../topics/DoublyLinkedList";
import SinglyLinkedList from "../topics/SinglyLinkedList";
import CircularLinkedList from "../topics/CircularLinkedList";
import Arrays from "../topics/Arrays";
import StackTopic from "../topics/Stack";
import QueueTopic from "../topics/Queue";
import Trees from "../topics/Trees";
import Graphs from '../topics/Graphs';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, Drawer, Divider, useMediaQuery, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import UnionTypes from "../topics/UnionTypes";
import ConjunctionTypes from "../topics/ConjunctionTypes";
import Generics from "../topics/Generics";
import BuiltInUtilityTypes from "../topics/BuiltInUtilityTypes";
import AdvancedTypingConcepts from "../topics/AdvancedTypingConcepts";
import MappedTypes from "../topics/MappedTypes";
import ConditionalTypes from "../topics/ConditionalTypes";
import Heaps from '../topics/Heaps';

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

// function getMajorTopic(selected: string): string | undefined {
//   for (const section of sidebarData as any[]) {
//     if (section.subtopics && section.subtopics.includes(selected)) return section.label;
//     if (section.children) {
//       for (const child of section.children) {
//         if (child.subtopics && child.subtopics.includes(selected)) return section.label;
//       }
//     }
//   }
//   return undefined;
// }

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  const drawerWidth = isMdUp ? 260 : 200;
  const drawerDisplay = isXs ? "none" : "block";

  // --- Content for topics ---
  const topicContent: Record<string, React.ReactNode> = {
    "Union Types": <UnionTypes/>,
    "Conjunction Types": <ConjunctionTypes/>,
    Generics: <Generics/>,
    "Built-In Utility Types": <BuiltInUtilityTypes/>,
    "Advanced Typing Concepts": <AdvancedTypingConcepts/>,
    "Mapped Types": <MappedTypes/>,
    "Conditional Types": <ConditionalTypes/>,
    Arrays: <Arrays />,
    Stack: <StackTopic />,
    Queue: <QueueTopic />,
    SinglyLinkedList: <SinglyLinkedList />,
    DoublyLinkedList: <DoublyLinkedList />,
    CircularLinkedList: <CircularLinkedList />,
    Trees: <Trees />,
    Graphs: <Graphs />,
    Heaps: <Heaps />,
    // ...other topics...
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f1f5f9" }}>
      <IconButton
        sx={{position: "fixed", bgcolor: "#1d293d", height:"2rem", maxWidth: "2rem", }}
        className="sm:hidden top-2 left-0 z-50 rounded-md shadow-lg bg-slate-800"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Open sidebar menu"
      >
        <MenuIcon style={{ color: 'white', fontSize: 32 }} />
      </IconButton>
      {/* Sidebar */}
      <Drawer
        variant={isMdUp ? "permanent" : "temporary"}
        open={isMdUp ? true : sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          display: isMdUp ? drawerDisplay : (sidebarOpen ? 'block' : 'none'),
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#e2e8f0",
            borderRight: "1px solid #cbd5e1",
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" color="#334155" gutterBottom
            className="px-4 py-2"
          >
            Topics
          </Typography>
          <Divider sx={{mb: ".5rem"}}/>
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
      <Box sx={{ flex: 1, py: 4}} className="xs: p-6 md:p-8">
        {/* Header Bar */}
        <div className="w-full bg-slate-800 rounded-lg top-[-1.5rem] relative flex  items-center justify-between px-6 py-4">
          <div className="text-white text-xl md:text-2xl font-bold tracking-wide mb-2 md:mb-0">AlgoLearn <span className="font-normal text-blue-300">by AlgosLab</span></div>
          <nav className="flex gap-4">
            <Link to="/" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Home</Link>
            <Link to="/visualizer" className="text-white hover:text-blue-200 font-semibold transition-colors text-lg">Sorta</Link>
          </nav>
        </div>
        {topicContent[selected] || (
            <>
                <Typography variant="h6" gutterBottom fontWeight={"bold"} fontSize={"1.5rem"}>{selected}</Typography>
                <Typography color="text.secondary">No details added for  topic yet!!</Typography>
            </>
        )}
        <Box sx={{ display: 'flex', gap: 2, my: 4 }}>
          <Button variant="outlined" onClick={handlePrev} disabled={currentIdx <= 0}>
            Previous
          </Button>
          <Button variant="contained" onClick={handleNext} disabled={currentIdx === allSubtopics.length - 1}>
            Next
        </Button>
        </Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default AlgorithmInfo;
