export const styles = {
  buttonStyle: {
    background: "#F46A50",
    boxShadow: "none",
    textTransform: "capitalize",
    fontWeight: "500",
    borderRadius: "8px",
    padding: "8px 16px",
    "&:hover": {
      background: "#F46A50",
    },
  },
  tabStyles: {
    "& .MuiButtonBase-root": {
      padding: "0 !important",
      width: "60.5px",
      minWidth: "0",
    },
  },
  tasksWrapper: {
    paddingRight: "4px",
    height: "calc(100vh - 288px)",
    overflowY: "hidden",
    "&:hover": {
      overflowY: "scroll",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#323232",
    },

    "&::-webkit-scrollbar": {
      width: "4px",
    },
  },

  filterWrapper: {
    padding: "15px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
