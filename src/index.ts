import "reflect-metadata";
import {createConnection} from "typeorm";



const connection = createConnection()
.then(connection => {
    console.log("Tables created !");
}).catch(error => console.log(error));
/*
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "db_team_maker",
    entities: [
        User, Team, Type, Guild, Category
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    console.log("Tables created !");
}).catch(error => console.log(error));*/