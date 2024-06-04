import React from "react";
import { Box } from "@mui/material";
import {
  CreateNewFolderOutlined,
  FolderOutlined,
  DriveFileMoveOutlined,
  FolderSpecialOutlined,
} from "@mui/icons-material";
import ListCard from "./listCard";

const TaskLists = () => {
  const tasklist = [
    {
      name: "Total Task",
      count: 16,
      iconInfo: { icon: <FolderOutlined style={{ color: "#8e8e8e" }} />, bg: "#EFEFEF" },
    },
    {
      name: "Completed",
      count: 16,
      iconInfo: { icon: <FolderSpecialOutlined style={{ color: "#2cc09c" }} />, bg: "#e1f8f2" },
    },
    {
      name: "Working on",
      count: 16,
      iconInfo: { icon: <DriveFileMoveOutlined style={{ color: "#5a55cb" }} />, bg: "#ecebf9" },
    },
    {
      name: "Pending",
      count: 16,
      iconInfo: { icon: <CreateNewFolderOutlined style={{ color: "#f46a50" }} />, bg: "#fdeae6" },
    },
  ];
  return (
    <Box sx={{ py: "12px" }}>
      {tasklist.map((item, index) => (
        <ListCard
          key={index}
          taskName={item.name}
          taskCount={item.count}
          iconInfo={item.iconInfo}
        />
      ))}
    </Box>
  );
};

export default TaskLists;
