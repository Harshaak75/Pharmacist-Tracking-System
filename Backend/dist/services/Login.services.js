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
exports.CreateAdminData = exports.LoginDetails = void 0;
const client_1 = require("@prisma/client");
const Client = new client_1.PrismaClient();
const LoginDetails = (_a) => __awaiter(void 0, [_a], void 0, function* ({ employeeId }) {
    try {
        if (!employeeId) {
            throw new Error("Invalid input");
        }
        const admin = yield Client.collection_of_models.findFirst({
            where: {
                employeeid: employeeId,
            },
        });
        // console.log(admin);
        return admin;
    }
    catch (error) {
        return error;
    }
});
exports.LoginDetails = LoginDetails;
const CreateAdminData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, employeeId, email, bycrypt_password, }) {
    try {
        if (!employeeId || !bycrypt_password) {
            throw new Error("Invalid input");
        }
        console.log(name, employeeId, email, bycrypt_password);
        const admin = yield Client.collection_of_models.create({
            data: {
                name: name,
                employeeid: employeeId,
                email: email || "",
                password: bycrypt_password,
                role: "admin",
            },
        });
        // console.log(admin);
        return admin;
    }
    catch (error) {
        return error;
    }
});
exports.CreateAdminData = CreateAdminData;
