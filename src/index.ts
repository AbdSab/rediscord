import "reflect-metadata";
import {createConnection} from "typeorm";
import {Bot} from './bot';
import config from "../config.json";

const bot = new Bot(config.token);


const connection = createConnection()
.then(connection => {
    bot.start();
}).catch(error => {
    console.log(error);
});