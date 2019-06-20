import ICommand from './ICommand';

/**
 * An example command.
 * The bot will salute to the person who say hello to it.
 */
export default class HiCommand implements ICommand{
    name: string = "hi";
    filters: string[] = [];

    async execute(source:any, args: string[]){
        source.channel.send(`Hello <@${source.author.id}>`)
            .catch(err=>console.log(err));
    }
}