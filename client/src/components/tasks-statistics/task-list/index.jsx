import React from "react";
import { Box } from "@mui/material";
import {
  CreateNewFolderOutlined,
  FolderOutlined,
  DriveFileMoveOutlined,
  FolderSpecialOutlined,
} from "@mui/icons-material";
import ListCard from "./listCard";
import { Link } from "react-router-dom";

const TaskLists = () => {
  const tasklist = [
    {
      name: "Total Task",
      link: 'total-task',
      count: 16,
      iconInfo: {
        icon: <FolderOutlined style={{ color: "#8e8e8e", fontSize: 30 }} />,
        bg: "#EFEFEF",
      },
    },
    {
      name: "Completed",
      link: 'completed',
      count: 16,
      iconInfo: {
        icon: <FolderSpecialOutlined style={{ color: "#2cc09c", fontSize: 30 }} />,
        bg: "#e1f8f2",
      },
    },
    {
      name: "Running",
      link: 'running',
      count: 16,
      iconInfo: {
        icon: <DriveFileMoveOutlined style={{ color: "#5a55cb", fontSize: 30 }} />,
        bg: "#ecebf9",
      },
    },
    {
      name: "Pending",
      link: 'pending',
      count: 16,
      iconInfo: {
        icon: <CreateNewFolderOutlined style={{ color: "#f46a50", fontSize: 30 }} />,
        bg: "#fdeae6",
      },
    },
  ];
  return (
    <Box sx={{ py: "16px" }}>
      {tasklist.map((item, index) => (
        <Link to={`/${item.link}`} key={index} style={{textDecoration:'none'}}>
          <ListCard taskName={item.name} taskCount={item.count} iconInfo={item.iconInfo} />
        </Link>
      ))}
    </Box>
  );
};

export default TaskLists;
