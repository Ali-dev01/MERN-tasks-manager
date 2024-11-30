import express from "express";

import { userValidation } from "../validations/userValidation.js";

import { registerUser, login } from "../controller/user-controller.js";

const router = express.Router();

router.route("/register").post(userValidation(), registerUser);
router.route("/login").post(login);

export default router;
