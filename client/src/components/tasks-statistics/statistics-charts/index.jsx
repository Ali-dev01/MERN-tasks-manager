import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const StatisticsCharts = () => {
  const data = [
    { value: 580, name: "Working on", itemStyle: { color: "#5A55CB" } },
    { value: 735, name: "Completed", itemStyle: { color: "#2CC09C" } },
    { value: 484, name: "Pending", itemStyle: { color: "#F46A50" } },
    { value: 1048, name: "Total Tasks", itemStyle: { color: "#F7F6FB" } },
  ];

  // Calculate the total value for all data points
  const totalValue = data.reduce((total, item) => total + item.value, 0);

  // Add percentage labels to each data point
  const pieData = data.map((item) => ({
    value: item.value,
    name: item.name,
    label: {
      formatter: `${((item.value / totalValue) * 100).toFixed(0)}%`,
      position: "inside",
    },
    itemStyle: item.itemStyle,
  }));

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: pieData,
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600, color: "#e5e5e5" }}>Statistics</Typography>
        <Avatar sx={{ bgcolor: "#ccc" }}>AB</Avatar>
      </Box>
      <ReactEcharts option={option} style={{ height: "220px", width: "100%" }} />
    </>
  );
};

export default StatisticsCharts;
