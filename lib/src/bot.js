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
const discord_js_1 = __importDefault(require("discord.js"));
const config_json_1 = __importDefault(require("../config.json"));
const event_1 = __importDefault(require("./event"));
class Bot {
    constructor(token) {
        this.token = token;
        this.client = new discord_js_1.default.Client();
    }
    start() {
        this.client.login(config_json_1.default.token);
        this.events();
    }
    events() {
        event_1.default.forEach(event => {
            this.client.on(event.name, (source) => __awaiter(this, void 0, void 0, function* () { event.execute(source); }));
        });
    }
}
exports.Bot = Bot;
