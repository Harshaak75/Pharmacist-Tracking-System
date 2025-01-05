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
exports.create_doctor = exports.CreateRepresentative = void 0;
const client_1 = require("@prisma/client");
// import { NextFunction, Request, Response } from "express";
// import { Int32 } from "mongoose";
const Client = new client_1.PrismaClient();
// admin data validate
// export const LoginAdmin = async ({ employeeId, password }: admintype) => {
//   try {
//     if (!employeeId || !password) {
//       throw new Error("Invalid input");
//     }
//     const admin = await Client.collection_of_models.findFirst({
//       where: {
//         employeeid: employeeId,
//         password: password,
//       },
//     });
//     console.log(admin)
//     return admin;
//   } catch (error) {
//     return error;
//   }
// };
// Representative data validation and push to database
const CreateRepresentative = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, employeeid, email, bycrypt_password, role = "representative", }) {
    try {
        if (!name || !employeeid || !email || !bycrypt_password) {
            throw new Error("Invalid input");
        }
        console.log("in creating data", name, employeeid, email, bycrypt_password);
        const Representative = yield Client.collection_of_models.create({
            data: {
                name: name,
                employeeid: employeeid,
                email: email,
                password: bycrypt_password,
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
            !doctor_details.qualification ||
            !doctor_details.year_of_expirened ||
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
                year_of_expirened: Number(doctor_details.year_of_expirened),
                gender: doctor_details.gender,
                qualification: doctor_details.qualification,
                address: doctor_details.address,
                hospital_name: doctor_details.hospital_name,
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
