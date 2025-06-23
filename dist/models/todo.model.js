"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    user_id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users" },
}, { timestamps: true, versionKey: false });
const Todo = mongoose_1.default.model("todos", todoSchema);
