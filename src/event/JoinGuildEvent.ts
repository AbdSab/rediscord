import IEvent from './IEvent';

export default class JoinGuildEvent implements IEvent{
    readonly name: string = "guildCreate";
    async execute(source:any){
        console.log("Joined Server " + source.name);
    }
}