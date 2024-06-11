import mongoose from "mongoose";
import { validationResult } from "express-validator";

import { Task } from "../model/task-model.js";
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

//Get Single Task
const getSingleTask = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
    next(error);
  }
  try {
    const task = await Task.findOne({ _id: id });
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    const error = new CustomError(err.message, err.status, err.stack);
    next(error);
  }
};

//Update Task
const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
    next(error);
  }

  if (!status) {
    const error = new CustomError("Status is Required", 400);
    next(error);
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true, runValidators: true }
    );
    return res.json({ success: true, data: updatedTask });
  } catch (err) {
    if (err.name === "ValidationError") {
      const error = new CustomError(
        "Valid status values are 'PENDING','INPROGRESS','COMPLETED'",
        400
      );
      next(error);
    } else {
      next(err.message, err.status, err.stack);
    }
  }
};

//Delete Task
const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
    next(error);
  }

  try {
    const isDeleted = await Task.deleteOne({ _id: id });
    res.json(isDeleted);
  } catch (err) {
    next(err.message, err.status, err.stack);
  }
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
