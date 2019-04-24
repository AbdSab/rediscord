import IEvent from "./IEvent";

export default class GuildMemberAddEvent implements IEvent{
    name: string = "guildMemberAdd";
    async execute(source:any) {
    }
}

