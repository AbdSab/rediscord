"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const bot_1 = require("./bot");
const config_json_1 = __importDefault(require("../config.json"));
const bot = new bot_1.Bot(config_json_1.default.token);
const connection = typeorm_1.createConnection()
    .then(connection => {
    bot.start();
}).catch(error => {
    console.log(error);
});
