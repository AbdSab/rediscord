"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageHelper_1 = __importDefault(require("../helper/MessageHelper"));
const command_1 = __importDefault(require("../command"));
class MessageEvent {
    constructor() {
        this.name = "message";
    }
    execute(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = new MessageHelper_1.default(source.content);
            //commands.forEach(command => {
            //TODO: Exceute filters
            //if(command.name === message.getCommand()){
            //    command.execute(source, message.getArgs());
            //}
            //commands[message.command].execute(message.args);
            console.log(command_1.default[message.command]);
            //})
        });
    }
}
exports.default = MessageEvent;
