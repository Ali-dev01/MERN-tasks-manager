import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};

export default dbConnection;
