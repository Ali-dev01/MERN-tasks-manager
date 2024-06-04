import mongoose from "mongoose";

import { Task } from "../model/task-model.js";
import { CustomError } from "../utils/ErrorClass.js";

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

const createTask = async (req, res, next) => {
  const { title, description, startDate, endDate } = req.body;

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
    if (err?.name === "ValidationError") {
      const errorFields = Object.keys(err?.errors);
      const errorMessages = errorFields?.map((field) => `${field} is required`);
      const error = new CustomError(errorMessages.join(", "), 400, err.stack);
      next(error);
    } else {
      next(err);
    }
  }
};

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

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new CustomError("Invalid id", 400);
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
