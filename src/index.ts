import "reflect-metadata";
import {createConnection} from "typeorm";
import {Bot} from './bot';


const connection = createConnection()
.then(connection => {
    console.log("Tables created !");
}).catch(error => console.log(error));