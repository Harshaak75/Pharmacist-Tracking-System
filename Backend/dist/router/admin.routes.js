"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const admin_controller_1 = require("../controller/admin.controller");
const router = express_1.default.Router();
// admin login routes
// router.post(
//   "/login",
//   [
//     body("employeeId").notEmpty().withMessage("Enter your employee number"),
//     body("password").notEmpty().withMessage("enter valid password"),
//   ],
//   loginAdmin
// );
// Representative Create routes
router.post("/create/rep", [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Enter your employee name"),
    (0, express_validator_1.body)("employeeid").notEmpty().withMessage("Enter your employee Id"),
    (0, express_validator_1.body)("email").isEmail().withMessage("enter valid email"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("enter valid password")
    // body("phone_number")
    //   .notEmpty()
    //   .withMessage("Enter phone number")
    // body("role").notEmpty().withMessage("select your role")
], admin_controller_1.Create_Representative_Account);
// Create Doctor account routes
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
    // body("role").notEmpty().withMessage("select your role")
], admin_controller_1.create_doctor_account);
exports.default = router;
