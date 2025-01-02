"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdmin = exports.CheckLogin = void 0;
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Login_services_1 = require("../services/Login.services");
const config_1 = require("../config");
const CheckLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    // Continue with login logic...
    const { employeeId, password } = req.body;
    //   const bycrypt_password = "0" // change this
    const admin_data = yield (0, Login_services_1.LoginDetails)({ employeeId });
    if (admin_data) {
        const admin = admin_data; // Assert the type of admin_data
        const passwords = admin.password;
        console.log(admin);
        const bcrypt_password = bcrypt_1.default.compareSync(password, passwords);
        if (bcrypt_password) {
            console.log(admin.role, password); // Now TypeScript knows `role` exists
            res.status(200).json({ messge: "success" });
            return;
        }
        else {
            res.status(401).json({ message: "Incorrect Password" });
            return;
        }
    }
    else {
        res.status(401).json({ message: "Invalid Credentials" });
        return;
    }
});
exports.CheckLogin = CheckLogin;
const CreateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        const { name, employeeId, email, password, key } = req.body;
        // check for key
        console.log("env", config_1.admin_secret_key, "key", key);
        if (key != config_1.admin_secret_key) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        console.log(employeeId, password, key);
        const bycrypt_password = bcrypt_1.default.hashSync(password, 3);
        const Representative_data = yield (0, Login_services_1.CreateAdminData)({
            name,
            employeeId,
            email,
            bycrypt_password,
        });
        console.log(Representative_data);
        res.status(200).json(Representative_data);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error while creating the Representative" });
    }
});
exports.CreateAdmin = CreateAdmin;
