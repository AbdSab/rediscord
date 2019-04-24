import IFitler from './IFilter';
import ICommand from "../command/ICommand";

export default class IsBotFilter implements IFitler{
    name: string = "isBot";
    process(source, command){
        if(source.author.bot){
            source.channel.reply(`You are a bot, no command execution for you`);
            return false;
        }
        return true;
    };
}