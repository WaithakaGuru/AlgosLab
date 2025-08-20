import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f1f5f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
        m: 0,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" fontWeight="bold" color="#334155" gutterBottom>
          Welcome to Sorta
        </Typography>
        <Typography variant="h5" color="#64748b" gutterBottom>
          Learn and Visualize Data Structures & Algorithms
        </Typography>
        <Typography variant="body1" color="#334155" sx={{ mt: 2, mb: 4 }}>
          Sorta is your interactive learning area for Data Structures and Algorithms (DSA). Explore in-depth explanations, code examples, and visualizations for sorting, searching, and a wide range of DSA concepts. Perfect for students, educators, and anyone curious about how algorithms work!
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/info"
            sx={{ fontWeight: "bold", borderRadius: 2 }}
          >
            Learn DSA
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/visualizer"
            sx={{ fontWeight: "bold", borderRadius: 2 }}
          >
            Visualize Sorting
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;
