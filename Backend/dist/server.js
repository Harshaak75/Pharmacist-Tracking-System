"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const server = http_1.default.createServer(_1.default);
server.listen(config_1.port, () => {
    console.log("Server is running on port 3000");
});
