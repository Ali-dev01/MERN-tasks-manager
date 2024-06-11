import { body } from "express-validator";

export const taskValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ max: 30 })
      .withMessage("Title should be maximum 30 characters"),
    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ max: 50 })
      .withMessage("Description should be maximum 50 characters"),
    body("startDate").notEmpty().withMessage("Start date is required"),
    body("endDate").notEmpty().withMessage("End Date is required"),
    body("status").notEmpty().withMessage("status is required"),
  ];
};
