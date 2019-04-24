"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IsAdminFilter_1 = __importDefault(require("./IsAdminFilter"));
const IsBotFilter_1 = __importDefault(require("./IsBotFilter"));
const filters = [];
filters.push(new IsAdminFilter_1.default());
filters.push(new IsBotFilter_1.default());
exports.default = filters;
