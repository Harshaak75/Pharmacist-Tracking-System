import express from "express";
import { body } from "express-validator";
import {
    create_doctor_account,
  Create_Representative_Account,
  loginAdmin,
} from "../controller/admin.controller";

const router = express.Router();

// admin login routes

router.post(
  "/login",
  [
    body("employeeId").notEmpty().withMessage("Enter your employee number"),
    body("password").notEmpty().withMessage("enter valid password"),
  ],
  loginAdmin
);

// Representative Create routes

router.post(
  "/create/rep",
  [
    body("name").notEmpty().withMessage("Enter your employee name"),
    body("employeeid").notEmpty().withMessage("Enter your employee Id"),
    body("email").isEmail().withMessage("enter valid email"),
    body("password").notEmpty().withMessage("enter valid password"),
    body("phone_number")
      .notEmpty()
      .withMessage("Enter phone number")
    // body("role").notEmpty().withMessage("select your role")
  ],
  Create_Representative_Account
);

// Create Doctor account routes

router.post("/create/doctor",[
    body("name").notEmpty().withMessage("Enter your employee name"),
    body("gender").notEmpty().withMessage("Enter your gender"),
    body("qualification").notEmpty().withMessage("Enter your qualification"),
    body("year_of_expirened").notEmpty().withMessage("Enter your year_of_expirened"),
    body("hospital_name").notEmpty().withMessage("Enter your hospital_name"),
    body("speciality").notEmpty().withMessage("Enter your speciality"),
    body("address").notEmpty().withMessage("Enter your address"),
    body("phone_number")
     .notEmpty()
     .withMessage("Enter phone number"),
    body("email").isEmail().withMessage("enter valid email"),
    body("password").notEmpty().withMessage("enter valid password"),
    
    // body("role").notEmpty().withMessage("select your role")
  ],
  create_doctor_account,
)

export default router;
