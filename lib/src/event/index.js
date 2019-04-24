"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageEvent_1 = __importDefault(require("./MessageEvent"));
const GuildMemberAddEvent_1 = __importDefault(require("./GuildMemberAddEvent"));
const ReadyEvent_1 = __importDefault(require("./ReadyEvent"));
const JoinGuildEvent_1 = __importDefault(require("./JoinGuildEvent"));
const events = [];
events.push(new ReadyEvent_1.default());
events.push(new GuildMemberAddEvent_1.default());
events.push(new JoinGuildEvent_1.default());
events.push(new MessageEvent_1.default());
exports.default = events;
