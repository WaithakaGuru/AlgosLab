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
          Visualize and learn sorting algorithms interactively
        </Typography>
        <Typography variant="body1" color="#334155" sx={{ mt: 2, mb: 4 }}>
          Explore how different sorting algorithms work step by step. Choose an algorithm, set your array size, and watch the process unfold visually. Perfect for students, educators, and anyone curious about algorithms!
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/visualizer"
            sx={{ fontWeight: "bold", borderRadius: 2 }}
          >
            Start Visualizing
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;
