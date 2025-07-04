"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const example_route_1 = require("./controllers/example.route");
exports.app = (0, express_1.default)();
// middleware
exports.app.use(express_1.default.json()); // for body parser.
// route
exports.app.use("/example", example_route_1.exampleRoutes);
// root route
exports.app.get("/", (req, res) => {
    res.send("Welcome to the application");
});
// 404 route
exports.app.use((req, res, next) => {
    res.status(404).send("Path not found.");
});
