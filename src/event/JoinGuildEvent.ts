import IEvent from './IEvent';
import {Client} from "discord.js";

export default class JoinGuildEvent implements IEvent{
    readonly name: string = "guildCreate";
    async execute(client:Client, source:any){
        console.log("Joined Server " + source.name);
    }
}