"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const representative_controller_1 = require("../controller/representative.controller");
const admin_controller_1 = require("../controller/admin.controller");
const router = express_1.default.Router();
// login representative
router.post("/login", [
    (0, express_validator_1.body)("employeeid").notEmpty().withMessage("Enter your employeeId"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Enter your password")
], representative_controller_1.loginRepresentateive);
// create doctor account by representative
router.post("/create/doctor", [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Enter your employee name"),
    (0, express_validator_1.body)("gender").notEmpty().withMessage("Enter your gender"),
    (0, express_validator_1.body)("qualification").notEmpty().withMessage("Enter your qualification"),
    (0, express_validator_1.body)("year_of_expirened").notEmpty().withMessage("Enter your year_of_expirened"),
    (0, express_validator_1.body)("hospital_name").notEmpty().withMessage("Enter your hospital_name"),
    (0, express_validator_1.body)("speciality").notEmpty().withMessage("Enter your speciality"),
    (0, express_validator_1.body)("address").notEmpty().withMessage("Enter your address"),
    (0, express_validator_1.body)("phone_number")
        .notEmpty()
        .withMessage("Enter phone number"),
    (0, express_validator_1.body)("email").isEmail().withMessage("enter valid email"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("enter valid password"),
], admin_controller_1.create_doctor_account);
// submit daily activity by representative
router.post("/create/DailyActivity", [
    (0, express_validator_1.body)("representative_name").notEmpty().withMessage("Enter your employee name"),
    (0, express_validator_1.body)("doctor_name").notEmpty().withMessage("Enter doctor name"),
    (0, express_validator_1.body)("product_name").notEmpty().withMessage("Enter product_name"),
    (0, express_validator_1.body)("latitude").notEmpty().withMessage("Enter latitude"),
    (0, express_validator_1.body)("longitude").notEmpty().withMessage("Enter longitude"),
    (0, express_validator_1.body)("image").notEmpty().withMessage("Upload Image "),
], representative_controller_1.SubmitDailyActivity);
router.post("/create/complain", [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Enter name"),
    (0, express_validator_1.body)("email").isEmail().withMessage("Enter valid email"),
    (0, express_validator_1.body)("subject").notEmpty().withMessage("Subject"),
    (0, express_validator_1.body)("message").notEmpty().withMessage("Enter complain details"),
], representative_controller_1.Create_Complains);
router.get("/complains/list", representative_controller_1.get_complains);
router.put("/complains/update", representative_controller_1.update_complaint);
exports.default = router;
