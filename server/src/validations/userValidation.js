import { body } from "express-validator";

export const userValidation = () => {
  return [
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is not valid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};
