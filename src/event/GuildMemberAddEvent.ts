import IEvent from "./IEvent";
import {Client} from "discord.js";

export default class GuildMemberAddEvent implements IEvent{
    name: string = "guildMemberAdd";
    async execute(client:Client, source:any) {

    }
}

