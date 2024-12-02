import mongoose from "mongoose";
import { validationResult } from "express-validator";

import { Task } from "../model/task.model.js";
import { CustomError } from "../utils/ErrorClass.js";

//Get Tasks
const getAllTasks = async (req, res, next) => {
  const { search } = req.query;

  const query = {};
  if (search) {
    query.$or = [
      {
        title: { $regex: new RegExp(search, "i") },
      },
      {
        description: { $regex: new RegExp(search, "i") },
      },
    ];
  }

  try {
    const tasks = await Task.find(query);
    return res.json({ success: true, data: tasks });
  } catch (err) {
    const error = new CustomError(err.message, 400, err.stack);
    next(error);
  }
};

//Create new Task
const createTask = async (req, res, next) => {
  const { title, description, startDate, endDate } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const fieldErrors = errors.errors.map((error) => error.msg);
    const error = new CustomError(fieldErrors, 400);
    next(error);
  }

  try {
    const newTask = new Task({
      title,
      description,
      startDate,
      endDate,
    });

    await newTask.save();
    return res.status(201).json({ success: true, task: newTask });
  } catch (err) {
    const error = new CustomError(err.message, 400, err.stack);
    next(error);
  }
};

//Update Task
const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const errors = validationResult(req);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
    next(error);
  }

  if (!errors.isEmpty()) {
    const fieldErrors = errors.array().map((error) => error.msg);
    const error = new CustomError(fieldErrors, 400);
    next(error);
    return;
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true, runValidators: true }
    );
    return res.json({ success: true, data: updatedTask });
  } catch (err) {
    next(err.message, err.status, err.stack);
  }
};

//Delete Task
const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  const isExist = await Task.findOne({ _id: id });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
    next(error);
  }

  if (!isExist) {
    const error = new CustomError("No record found with this id", 400);
    next(error)
  }

  try {
    const isDeleted = await Task.deleteOne({ _id: id });
    res.json(isDeleted);
  } catch (err) {
    next(err.message, err.status, err.stack);
  }
};

export { getAllTasks, createTask, updateTask, deleteTask };
