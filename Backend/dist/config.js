"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_secret_key = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables
exports.port = process.env.PORT || 3000;
exports.admin_secret_key = process.env.ADMIN_CREATION_SECRET;
if (!exports.admin_secret_key) {
    throw new Error("ADMIN_CREATION_SECRET is required but not defined");
}
