import ICommand from './ICommand';

export default class HiCommand implements ICommand{
    name: string = "hello";
    filters: string[] = [];

    async execute(source:any, args: string[]){
        source.channel.send(`.tm hello Hello <@${source.author.id}>`)
            .catch(err=>console.log(err));
    }
}