import React from "react";
import { Box, Grid } from "@mui/material";
import StatisticsCharts from "./statistics-charts";
import TaskLists from "./task-list";

const TaskStatistics = () => {
  return (
    <Grid
      container
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={11}
        sm={8}
        md={5}
        lg={4}
        sx={{
          background: "#191919",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            padding: "5px 20px",
            background: "#323232",
            borderRadius: "20px",
          }}
        >
          <StatisticsCharts />
        </Box>
        <Box px={1.5}>
          <Box mt={1} sx={styles.tasksInfoList}>
            <TaskLists />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskStatistics;

const styles = {
  tasksInfoList: {
    height: "calc(100vh - 312px)",
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
