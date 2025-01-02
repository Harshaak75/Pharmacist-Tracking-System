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
exports.create_doctor_account = exports.Create_Representative_Account = void 0;
const express_validator_1 = require("express-validator");
const admin_services_1 = require("../services/admin.services");
const bcrypt_1 = __importDefault(require("bcrypt"));
// admin login logic
// export const loginAdmin = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<any> => {
//   const error = validationResult(req);
//   if (!error.isEmpty()) {
//     return res.status(400).json({ errors: error.array() });
//   }
//   // Continue with login logic...
//   const { employeeId, password } = req.body;
//   const admin_data = await LoginAdmin({ employeeId, password });
//   console.log(admin_data)
//   res.json(admin_data);
// };
// Representative create account logic
const Create_Representative_Account = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        const { name, employeeid, email, password, phone_number } = req.body;
        console.log(name, employeeid, email, password, phone_number);
        const bycrypt_password = bcrypt_1.default.hashSync(password, 3);
        const Representative_data = yield (0, admin_services_1.CreateRepresentative)({
            name,
            employeeid,
            email,
            bycrypt_password,
            phone_number,
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
exports.Create_Representative_Account = Create_Representative_Account;
// Doctor create account logic
const create_doctor_account = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        const doctor_details = req.body;
        const passowrd = doctor_details.password;
        const bcryptPassword = bcrypt_1.default.hashSync(passowrd, 3);
        const doctor_data = yield (0, admin_services_1.create_doctor)(Object.assign(Object.assign({}, doctor_details), { password: bcryptPassword }));
        res.status(200).json(doctor_data);
    }
    catch (error) {
        res.status(500).json({ errors: error });
    }
});
exports.create_doctor_account = create_doctor_account;
