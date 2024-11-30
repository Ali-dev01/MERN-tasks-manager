import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
        py: 2.5,
        px: 2,
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            background: bg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 1.5,
          }}
        >
          {icon}
        </Box>
        <Stack gap={0}>
          <Typography sx={{ color: "#e5e5e5", fontSize: "18px" }}>{taskName}</Typography>
          <Typography sx={{ color: "#ccc", fontSize: "18px" }}>{taskCount}</Typography>
        </Stack>
      </Box>
      <IconButton>
        <KeyboardArrowRightIcon style={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default ListCard;
