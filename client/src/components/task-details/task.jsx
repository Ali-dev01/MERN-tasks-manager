import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Task = ({ data }) => {
  const pickColor = (status) => {
    const statusColors = {
      Running: "#5a55cb",
      Pending: "#d05a44",
      Completed: "#2cc09c",
    };
    return statusColors[status] || "#000000";
  };

  return (
    <>
      <Box sx={styles.cardStyles}>
        <Typography variant="body" fontWeight="500" color={pickColor(data.status)}>
          {data.status}
        </Typography>
        <Divider sx={{ my: 1, background: "#4c4c4c" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box sx={{ borderLeft: `3px solid ${pickColor(data.status)}` }}>
            <Typography variant="h6" color="#e5e5e5" ml={1}>
              {data.title}
            </Typography>
            <Typography color="#C9C9C9" ml={1} variant="body2">
              {data.desc}
            </Typography>
          </Box>
          <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
            <MoreVertIcon sx={{ color: "#C9C9C9" }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", gap: "20px", mt: "12px" }}>
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <ScheduleIcon sx={{ color: "#C9C9C9" }} />
            <Typography variant="body2" color="#e5e5e5">
              {data.time}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <DateRangeIcon sx={{ color: "#C9C9C9" }} />
            <Typography variant="body2" color="#e5e5e5">
              {data.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Task;

const styles = {
  cardStyles: {
    background: "#323232",
    borderRadius: "10px",
    padding: "5px 10px",
    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
  },
};
