import ICommand from './ICommand';
import IsBotFilter from '../filter/IsAdminFilter';

export default class HiCommand extends IsBotFilter implements ICommand{
    name: string = "hello";
    filters: string[] = ["IsAdmin", "IsBot"];
    async execute(source:any, args: string[]){
        await source.channel.send(`Hello <@${source.author.id}>`);
    }
}