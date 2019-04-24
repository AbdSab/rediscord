import ICommand from './ICommand';
import IsBotFilter from '../filter/IsAdminFilter';

export default class HiCommand extends IsBotFilter implements ICommand{
    name: string = "hello";
    filters: string[] = ["isAdmin", "isBot"];

    async execute(source:any, args: string[]){
        source.channel.send(`Hello <@${source.author.id}>`).catch(err=>console.log(err));
    }
}