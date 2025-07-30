"use client";
import { Box, Typography } from "@mui/material";
import Chart from "./components/Chart";
import Counter from "./components/Counter";
export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Counter />
      <Chart />
    </Box>
  );
}
