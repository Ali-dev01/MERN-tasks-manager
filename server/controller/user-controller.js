import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import { User } from "../model/users-model.js";
import { CustomError } from "../utils/ErrorClass.js";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const fieldErrors = errors.errors.map((error) => error.msg);
    const error = new CustomError(fieldErrors, 400);
    next(error);
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.json({ success: true, user: newUser });
  } catch (err) {
    const error = CustomError(err.message, 500);
    next(error);
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;
};
