import express from "express";
import { body } from "express-validator";
import { CheckLogin, CreateAdmin } from "../controller/Login.controller";

const router = express.Router();

router.post(
  "/login",
  [
    body("employeeId").notEmpty().withMessage("Enter your employee number"),
    body("password").notEmpty().withMessage("enter valid password"),
  ],
  CheckLogin
);

router.post(
    "/createAdmin",
    [
    body("name").notEmpty().withMessage("Enter your Admin name"),
      body("employeeId").notEmpty().withMessage("Enter your employee number"),
      body("email").notEmpty().withMessage("Enter your email"),
      body("password").notEmpty().withMessage("enter valid password"),
      body("key").notEmpty().withMessage("Enter Proper Serect Key"),
    ],
    CreateAdmin
  );

export default router;