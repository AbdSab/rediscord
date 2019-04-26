import IEvent from './IEvent';
import {Client} from "discord.js";

export default class ReadyEvent implements IEvent{
    readonly name: string = "ready";
    async execute({users, guilds}, source:any){
        console.log("Bot started and ready");
        console.log(`Guilds: ${guilds.size}`);
        console.log(`Users: ${users.size}`);
    }
}
