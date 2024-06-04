import { Box, Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const AddTaskModal = ({
  open,
  setIsModal,
  values,
  isError,
  handleChange,
  handleDateChange,
  handleSubmit,
}) => {
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          width: "400px",
          background: "#000",
          borderRadius: "8px",
        },
      }}
      onClose={() => {
        setIsModal(false);
      }}
    >
      <Box sx={{ p: "20px" }}>
        <Typography fontSize="20px" color="#e5e5e5" mb={2} letterSpacing={1}>
          Task Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name="title"
              variant="outlined"
              size="small"
              value={values.title}
              onChange={handleChange}
              fullWidth
              error={isError && !values.title}
              helperText={isError && !values.title ? "Field is required" : ""}
              FormHelperTextProps={{ sx: { color: "#f44336" } }}
              placeholder="Task Title"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#191919",
                  borderRadius: "8px",
                  color: "#e5e5e5",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ "& .MuiTextField-root": { width: "100%" } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                slotProps={{
                  textField: {
                    placeholder: "Select Date",
                    error: isError && !values.date,
                    helperText: isError && !values.date ? "Field is required" : "",
                    FormHelperTextProps: { sx: { color: "#f44336" } },
                  },
                }}
                disablePast
                value={values.date}
                onChange={handleDateChange("date")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#191919",
                    borderRadius: "8px",
                    color: "#e5e5e5",
                    height: "42px",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} sx={{ "& .MuiTextField-root": { width: "100%" } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="startTime"
                value={values.startTime}
                onChange={handleDateChange("startTime")}
                slotProps={{
                  textField: {
                    placeholder: "Start Time",
                    error: isError && !values.startTime,
                    helperText: isError && !values.startTime ? "Field is required" : "",
                    FormHelperTextProps: { sx: { color: "#f44336" } },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#191919",
                    borderRadius: "8px",
                    color: "#e5e5e5",
                    height: "42px",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} sx={{ "& .MuiTextField-root": { width: "100%" } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="endTime"
                slotProps={{
                  textField: {
                    placeholder: "End Time",
                    error: isError && !values.endTime,
                    helperText: isError && !values.endTime ? "Field is required" : "",
                    FormHelperTextProps: { sx: { color: "#f44336" } },
                  },
                }}
                value={values.endTime}
                onChange={handleDateChange("endTime")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#191919",
                    borderRadius: "8px",
                    color: "#e5e5e5",
                    height: "42px",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name="desc"
              variant="outlined"
              value={values.desc}
              onChange={handleChange}
              rows={3}
              multiline
              fullWidth
              placeholder="Description..."
              error={isError && !values.desc}
              helperText={isError && !values.desc ? "Field is required" : ""}
              FormHelperTextProps={{ sx: { color: "#f44336" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#191919",
                  borderRadius: "8px",
                  color: "#e5e5e5",
                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, color: "#fff", fontWeight: "bold", borderRadius: "8px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
};
export default AddTaskModal;
