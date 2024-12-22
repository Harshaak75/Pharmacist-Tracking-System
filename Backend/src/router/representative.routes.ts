import express from "express";
import {body} from "express-validator";
import { loginRepresentateive, SubmitDailyActivity } from "../controller/representative.controller";
import { create_doctor_account } from "../controller/admin.controller";

const router = express.Router();

router.post("/login",[
    body("employeeid").notEmpty().withMessage("Enter your employeeId"),
    body("password").notEmpty().withMessage("Enter your password")
],
loginRepresentateive,
)

router.post("/create/doctor",[
    body("name").notEmpty().withMessage("Enter your employee name"),
    body("gender").notEmpty().withMessage("Enter your gender"),
    body("date_of_birth").notEmpty().withMessage("Enter your date of birth"),
    body("qualification").notEmpty().withMessage("Enter your qualification"),
    body("year_of_expirened").notEmpty().withMessage("Enter your year_of_expirened"),
    body("licence_number").notEmpty().withMessage("Enter your licence_number"),
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

router.post("/create/DailyActivity",[
  body("representative_name").notEmpty().withMessage("Enter your employee name"),
    body("doctor_name").notEmpty().withMessage("Enter doctor name"),
    body("date").notEmpty().withMessage("Enter your date of birth"),
    body("product_name").notEmpty().withMessage("Enter product_name"),
    body("latitude").notEmpty().withMessage("Enter latitude"),
    body("longitude").notEmpty().withMessage("Enter longitude"),
],
SubmitDailyActivity,
)

export default router;