"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = __importDefault(require("./router/admin.routes"));
const representative_routes_1 = __importDefault(require("./router/representative.routes"));
const cors_1 = __importDefault(require("cors"));
const Login_routes_1 = __importDefault(require("./router/Login.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});
app.use("/medtrackpro", Login_routes_1.default);
app.use("/admin", admin_routes_1.default); // admin routes
app.use("/representative", representative_routes_1.default);
exports.default = app;
