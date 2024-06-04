import express from "express";

import {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "../controller/tasks-controller.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

export default router;
