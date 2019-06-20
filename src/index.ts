import "reflect-metadata";
import {createConnection} from "typeorm";
import {Bot} from './Bot';
import config from "../config.json";

const bot = new Bot(config.token);

createConnection().then(connection => {
    console.log("Connected to database");
    bot.start().catch(err=>console.log(err));
}).catch(error => {
    console.log(error);
});