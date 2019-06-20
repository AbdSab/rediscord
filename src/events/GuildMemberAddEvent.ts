import IEvent from "./IEvent";
import {Client} from "discord.js";

/**
 * Check whatever a new member joined the server.
 */
export default class GuildMemberAddEvent implements IEvent{
    /**
     * @inheritDoc
     */
    name: string = "guildMemberAdd";

    /**
     * @inheritDoc
     */
    async execute(client:Client, source:any) {

    }
}

