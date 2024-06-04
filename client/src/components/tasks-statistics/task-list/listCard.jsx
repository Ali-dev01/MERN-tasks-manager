import React from "react";
import { Box, Typography } from "@mui/material";

const ListCard = ({ taskName, taskCount, iconInfo }) => {
  const { icon, bg } = iconInfo;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#323232",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "12px",
        p: 1.2,
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ px: 0.8, pt: 0.6, pb: 0.3, borderRadius: "10px", background: bg, mr: 1 }}>
          {icon}
        </Box>
        <Typography sx={{ color: "#e5e5e5" }}>{taskName}</Typography>
      </Box>
      <Typography sx={{ color: "#ccc" }}>{taskCount}</Typography>
    </Box>
  );
};

export default ListCard;
