"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Chart() {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("api/proxy")
      .then((res) => {
        if (!res.ok) throw new Error("Can't find data.");
        return res.json();
      })
      .then((data) => {
        const result = data.result.results;
        const labels = result.map((item) => `民國${item["民國年"]}年`);
        const elementary = result.map((item) =>
          parseInt(item["國民小學【統計數值】"])
        );
        const juniorHighSchool = result.map((item) =>
          parseInt(item["國民中學【統計數值】"])
        );
        const seniorHighSchool = result.map((item) =>
          parseInt(item["高級中等學校【統計數值】"])
        );
        setChartData({
          labels,
          datasets: [
            {
              label: "國民小學",
              data: elementary,
              backgroundColor: "#42a5f5",
            },
            {
              label: "國民中學",
              data: juniorHighSchool,
              backgroundColor: "#66bb6a",
            },
            {
              label: "高級中等學校",
              data: seniorHighSchool,
              backgroundColor: "#ffa726",
            },
          ],
        });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
      });
  }, []);
  if (!chartData) return <div>載入中...</div>;
  if (error) return <div>錯誤：{error}</div>;

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto", 
        height: "400px",
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "flex-start",
      }}
    >
      <Typography variant="h5" component="h5" gutterBottom>
        歷年各級學校統計
      </Typography>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              beginAtZero: true,
              title: {
                display: true,
                text: "班級數",
              },
            },
          },
        }}
      />
    </Box>
  );
}
