import "reflect-metadata";
import {createConnection} from "typeorm";
import {Bot} from './Bot';
import config from "./config.json";

const bot = new Bot(config.token);


createConnection().then(connection => {
    bot.start();
}).catch(error => {
    console.log(error);
});