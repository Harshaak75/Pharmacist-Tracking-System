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
exports.createActivity = exports.isRepresentaivePresent = void 0;
const client_1 = require("@prisma/client");
const Client = new client_1.PrismaClient();
// logic to query the database for representative present or not
const isRepresentaivePresent = (_a) => __awaiter(void 0, [_a], void 0, function* ({ employeeid, password }) {
    if (!employeeid || !password) {
        throw new Error("Employee id is required");
    }
    try {
        const get_representative_data = yield Client.representative.findFirst({
            where: {
                employeeid: employeeid,
            },
            select: {
                password: true,
            },
        });
        return get_representative_data;
    }
    catch (error) {
        console.log("error retrieving employee data", error);
    }
});
exports.isRepresentaivePresent = isRepresentaivePresent;
// logic to add activity to database from representative
const createActivity = (_a) => __awaiter(void 0, [_a], void 0, function* ({ representative_name, doctor_name, product_name, latitude, longitude, image_data }) {
    if (!representative_name || !doctor_name || !product_name || !latitude || !longitude) {
        throw new Error("Invalid input");
    }
    try {
        const activityData = {
            representative_name,
            doctor_name,
            product_promoted: product_name,
            latitude,
            longitude,
            image_data: image_data || null, // Handle optional image_data
        };
        const createactivity = yield Client.activity.create({
            data: activityData
        });
        return createactivity;
    }
    catch (error) {
        console.log("error creating the activity", error);
    }
});
exports.createActivity = createActivity;
