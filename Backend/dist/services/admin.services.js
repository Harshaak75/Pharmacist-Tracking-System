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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_doctor = exports.CreateRepresentative = exports.LoginAdmin = void 0;
const client_1 = require("@prisma/client");
const Client = new client_1.PrismaClient();
// admin data validate
const LoginAdmin = (_a) => __awaiter(void 0, [_a], void 0, function* ({ employeeId, password }) {
    try {
        if (!employeeId || !password) {
            throw new Error("Invalid input");
        }
        const admin = yield Client.admin.findFirst({
            where: {
                employeeid: employeeId,
                password: password,
            },
        });
        return admin;
    }
    catch (error) {
        return error;
    }
});
exports.LoginAdmin = LoginAdmin;
// Representative data validation and push to database
const CreateRepresentative = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, employeeid, email, bycrypt_password, phone_number, role = "representative", }) {
    try {
        if (!name || !employeeid || !email || !bycrypt_password || !phone_number) {
            throw new Error("Invalid input");
        }
        console.log("in creating data", name, employeeid, email, bycrypt_password, phone_number);
        const Representative = yield Client.representative.create({
            data: {
                name: name,
                employeeid: employeeid,
                email: email,
                password: bycrypt_password,
                phone_number: phone_number,
                role: role,
            },
        });
        return Representative;
    }
    catch (error) {
        console.error("Error creating representative:", error.message || error);
        throw error; // Rethrow or handle appropriately
    }
});
exports.CreateRepresentative = CreateRepresentative;
// Doctor data validation and push to database
const create_doctor = (doctor_details_1, ...args_1) => __awaiter(void 0, [doctor_details_1, ...args_1], void 0, function* (doctor_details, role = "doctor") {
    try {
        if (!doctor_details.name ||
            !doctor_details.gender ||
            !doctor_details.date_of_birth ||
            !doctor_details.qualification ||
            !doctor_details.year_of_expirened ||
            !doctor_details.licence_number ||
            !doctor_details.hospital_name ||
            !doctor_details.speciality ||
            !doctor_details.address ||
            !doctor_details.email ||
            !doctor_details.password) {
            // throw new Error("Invalid input");
            return "invalid input";
        }
        const doctor = yield Client.doctor.create({
            data: {
                name: doctor_details.name,
                email: doctor_details.email,
                password: doctor_details.password,
                phone_number: doctor_details.phone_number,
                speciality: doctor_details.speciality,
                year_of_expirened: doctor_details.year_of_expirened,
                gender: doctor_details.gender,
                date_of_birth: new Date(doctor_details.date_of_birth),
                qualification: doctor_details.qualification,
                address: doctor_details.address,
                hospital_name: doctor_details.hospital_name,
                licence_number: doctor_details.licence_number,
                role: role,
            },
        });
        return doctor;
    }
    catch (error) {
        console.error("Error creating doctor account:", error.message || error);
        return { error: "Failed to create doctor account", details: error.message };
    }
});
exports.create_doctor = create_doctor;
