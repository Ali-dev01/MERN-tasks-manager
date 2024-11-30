import React from "react";
import { Box, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const StatisticsCharts = () => {
  const data = [
    { value: 580, name: "Running", itemStyle: { color: "#5A55CB" } },
    { value: 735, name: "Completed", itemStyle: { color: "#2CC09C" } },
    { value: 484, name: "Pending", itemStyle: { color: "#F46A50" } },
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
      show: true,
      left: 'center',
      itemGap: 20,
      textStyle:{
        color: '#fff'
      }
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
      <Typography sx={{ fontWeight: 600, fontSize: "20px", color: "#e5e5e5", textAlign: "center" }}>
        Statistics
      </Typography>
      <Box sx={{ display: "flex", height: "90%", justifyContent: "center", alignItems: "center" }}>
        <ReactEcharts option={option} style={{ height: "340px", width: "100%" }} />
      </Box>
    </>
  );
};

export default StatisticsCharts;
