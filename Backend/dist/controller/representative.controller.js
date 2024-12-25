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
exports.SubmitDailyActivity = exports.loginRepresentateive = void 0;
const express_validator_1 = require("express-validator");
const representative_services_1 = require("../services/representative.services");
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginRepresentateive = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        const { employeeid, password } = req.body;
        const respresntativeLogin = yield (0, representative_services_1.isRepresentaivePresent)({ employeeid, password });
        const employee_password = respresntativeLogin === null || respresntativeLogin === void 0 ? void 0 : respresntativeLogin.password;
        if (!respresntativeLogin) {
            return res.status(400).send("Provide proper employee id");
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, employee_password || "");
        if (!isPasswordValid) {
            // throw new Error('Invalid credentials');
            return res.status(400).send("invalid credentials");
        }
        return res.status(200).send("success");
    }
    catch (error) {
        return res.json(error);
    }
});
exports.loginRepresentateive = loginRepresentateive;
const SubmitDailyActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        const { representative_name, doctor_name, date, product_name, latitude, longitude, image_data } = req.body;
        // console.log(image_data)
        const base64Image = image_data.split(";base64,").pop();
        const Activity = yield (0, representative_services_1.createActivity)({ representative_name, doctor_name, date, product_name, latitude, longitude, base64Image });
        res.status(200).json(Activity);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.SubmitDailyActivity = SubmitDailyActivity;
