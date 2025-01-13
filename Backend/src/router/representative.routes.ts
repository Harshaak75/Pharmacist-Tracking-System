import express from "express";
import {body} from "express-validator";
import { Create_Complains, get_complains, loginRepresentateive, SubmitDailyActivity, update_complaint } from "../controller/representative.controller";
import { create_doctor_account } from "../controller/admin.controller";

const router = express.Router();

// login representative

router.post("/login",[
    body("employeeid").notEmpty().withMessage("Enter your employeeId"),
    body("password").notEmpty().withMessage("Enter your password")
],
loginRepresentateive,
)

// create doctor account by representative

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
  ],
  create_doctor_account,
)

// submit daily activity by representative

router.post("/create/DailyActivity",[
  body("representative_name").notEmpty().withMessage("Enter your employee name"),
    body("doctor_name").notEmpty().withMessage("Enter doctor name"),
    body("product_name").notEmpty().withMessage("Enter product_name"),
    body("latitude").notEmpty().withMessage("Enter latitude"),
    body("longitude").notEmpty().withMessage("Enter longitude"),
    body("image").notEmpty().withMessage("Upload Image "),
],
SubmitDailyActivity,
)

router.post("/create/complain",[
  body("name").notEmpty().withMessage("Enter name"),
  body("email").isEmail().withMessage("Enter valid email"),
  body("subject").notEmpty().withMessage("Subject"),
  body("message").notEmpty().withMessage("Enter complain details"),
],
Create_Complains
)

router.get("/complains/list", get_complains)

router.put("/complains/update", update_complaint)

export default router;