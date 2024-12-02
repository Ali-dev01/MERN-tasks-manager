import express from "express";
import dotenv from "dotenv";

import dbConnection from "./config/db.js";
import tasksRoutes from "./routes/tasks-routes.js";
import { ErrorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/tasks", tasksRoutes);
app.use(ErrorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.url} on the server`,
  });
});

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server due to database connection issue.");
  }
};

startServer();
