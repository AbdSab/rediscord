"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HiCommand_1 = __importDefault(require("./HiCommand"));
//TODO: Change index structure;
class CommandMap {
}
const commands = [];
commands["hello"] = new HiCommand_1.default();
exports.default = commands;
