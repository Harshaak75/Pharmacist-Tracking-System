"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const Login_controller_1 = require("../controller/Login.controller");
const router = express_1.default.Router();
router.post("/login", [
    (0, express_validator_1.body)("employeeId").notEmpty().withMessage("Enter your employee number"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("enter valid password"),
], Login_controller_1.CheckLogin);
router.post("/createAdmin", [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Enter your Admin name"),
    (0, express_validator_1.body)("employeeId").notEmpty().withMessage("Enter your employee number"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Enter your email"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("enter valid password"),
    (0, express_validator_1.body)("key").notEmpty().withMessage("Enter Proper Serect Key"),
], Login_controller_1.CreateAdmin);
exports.default = router;
