import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["PENDING", "RUNNING", "COMPLETED"],
        message: "Valid status values are 'PENDING','RUNNING','COMPLETED'",
      },
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

export const Task = new mongoose.model("Tasks", tasksSchema);
