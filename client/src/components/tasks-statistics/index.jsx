import React from "react";
import { Box } from "@mui/material";
import StatisticsCharts from "./statistics-charts";
import TaskLists from "./task-list";

const TaskStatistics = () => {
  return (
    <>
      <Box
        sx={{
          background: "#191919",
          borderRadius: "20px",
          mx: { lg: "10rem", md: "5rem", xs: "1rem" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "12px" }}>
          <Box
            sx={{
              p: "20px 20px",
              background: "#323232",
              width: { xs: "auto", md: "40%" },
              borderRadius: "20px",
            }}
          >
            <StatisticsCharts />
          </Box>
          <Box sx={{ width: { xs: "auto", md: "60%" }, mx:'15px' }}>
            <Box>
              <TaskLists />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TaskStatistics;

const styles = {
  tasksInfoList: {
    height: "calc(100vh - 40px)",
    overflowY: "hidden",
    "&:hover": {
      overflowY: "auto",
      paddingRight: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#323232",
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
  },
};
