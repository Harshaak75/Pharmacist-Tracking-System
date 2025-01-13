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
exports.UpdateComplaint = exports.listofComplains = exports.createComplaints = exports.findId = exports.createActivity = exports.isRepresentaivePresent = void 0;
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
const findId = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email }) {
    if (!email) {
        throw new Error("Email is required");
    }
    const _id = yield Client.representative.findUnique({ where: { email: email }, select: { id: true } });
    return _id;
});
exports.findId = findId;
const createComplaints = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, subject, message }) {
    if (!name || !email || !subject || !message) {
        throw new Error("Invalid input");
    }
    try {
        // console.log(name, email, subject, message)
        const _id = yield Client.collection_of_models.findUnique({ where: { email: email }, select: { id: true } });
        console.log(_id);
        if (!_id) {
            throw new Error("No representative found with this email");
        }
        const representative_id = _id.id;
        console.log(representative_id);
        const complains = yield Client.complains.create({
            data: {
                representative_name: name,
                email: email,
                subject: subject,
                message: message,
                representative_id: representative_id,
            }
        });
        return complains;
    }
    catch (error) {
        return error;
    }
});
exports.createComplaints = createComplaints;
const listofComplains = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listComplains = yield Client.complains.findMany();
        return listComplains;
    }
    catch (error) {
        return error;
    }
});
exports.listofComplains = listofComplains;
const UpdateComplaint = (_a) => __awaiter(void 0, [_a], void 0, function* ({ is_resolved, index }) {
    try {
        const UpdatedComplaint = yield Client.complains.update({
            where: {
                id: index,
            },
            data: {
                is_resolved: is_resolved,
            }
        });
        return UpdatedComplaint;
    }
    catch (error) {
        return error;
    }
});
exports.UpdateComplaint = UpdateComplaint;
