import express from "express";

import { taskValidation } from "../validations/taskValidation.js";

import {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "../controller/tasks-controller.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(taskValidation(),createTask);

router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

export default router;
