import IEvent from "./IEvent";

export default class GuildMemberAdd implements IEvent{
    name: string = "guildMemberAdd";
    execute(arg:any) {
        //Execute code//
    }
}

