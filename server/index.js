import express from "express";
import dotenv from "dotenv";

import dbConnection from "./config/db.js";
import tasksRouter from "./routes/tasks-routes.js";
import { ErrorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/tasks", tasksRouter);
app.use(ErrorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.url} on the server`,
  });
});

const startServer = () => {
  dbConnection()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

startServer();
