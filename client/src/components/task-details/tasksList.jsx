import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { ArrowBackIosNew } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Button, Grid, Typography, Tab } from "@mui/material";
import { Tabs, Stack, TextField, Menu, MenuItem, IconButton } from "@mui/material";

import Task from "./task";
import { styles } from "./styles";
import { tasksData } from "./tasksData";
import AddTaskModal from "../add-task-modal";
import { currentDate, currentWeek, today } from "../../helpers";

const initialFormValues = {
  title: "",
  date: null,
  startTime: null,
  endTime: null,
  desc: "",
};

const TasksList = () => {
  const [value, setValue] = useState(today.getDate());
  const [isModal, setIsModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  const { taskName } = useParams();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Custom handler for date/time pickers
  const handleDateChange = (name) => (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(formValues).some((value) => !value);

    if (isEmptyField) {
      setIsError(true);
      return;
    }
    console.log(formValues);
  };

  useEffect(() => {
    setValue(today.getDate());
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={11}
          md={9}
          sx={{
            borderRadius: "20px",
            background: "#191919",
            padding: { xs: "10px", md: "15px 20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to={`/`}>
              <ArrowBackIosNew sx={{ cursor: "pointer", color: "#e5e5e5" }} />
            </Link>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                textTransform: "capitalize",
                color: "#e5e5e5",
              }}
            >
              {taskName}
            </Typography>
            <div />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: "#706F73", fontWeight: 500 }}>{currentDate}</Typography>
              <Typography sx={{ fontWeight: 600, color: "#e5e5e5" }}>Today</Typography>
            </Box>
            <Button
              sx={styles.buttonStyle}
              variant="contained"
              startIcon={<AiOutlinePlus />}
              onClick={() => setIsModal(true)}
            >
              Add Task
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              borderBottom: 1,
              borderColor: "divider",
              mt: 1.5,
            }}
          >
            <Tabs
              value={value}
              sx={styles.tabStyles}
              onChange={(e, newValue) => setValue(newValue)}
              variant="fullWidth"
              scrollButtons={false}
              aria-label="wrapped label tabs example"
            >
              {currentWeek.map((item) => (
                <Tab
                  value={item.date}
                  key={item.date}
                  label={
                    <Stack alignItems="center">
                      <Typography variant="body2" color="#C4C4C6" textTransform="capitalize">
                        {item.day}
                      </Typography>
                      <Typography color="#7f7f7f" fontWeight={600}>
                        {item.date}
                      </Typography>
                    </Stack>
                  }
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={styles.filterWrapper}>
            <TextField
              id="outlined-basic"
              name="search"
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#323232",
                  borderRadius: "8px",
                  color: "#e5e5e5",
                },
              }}
            />
            <Box>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <FilterListIcon sx={{ color: "#F46A50" }} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Running</MenuItem>
                <MenuItem onClick={handleClose}>Pending</MenuItem>
                <MenuItem onClick={handleClose}>Completed</MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box sx={styles.tasksWrapper}>
            <Grid container spacing={2}>
              {tasksData.map((task) => (
                <Grid key={task.id} item md={6} xs={12}>
                  <Task data={task} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {isModal && (
        <AddTaskModal
          open={isModal}
          setIsModal={setIsModal}
          isError={isError}
          values={formValues}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default TasksList;
