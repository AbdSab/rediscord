import ICommand from './ICommand';
import {Message} from "discord.js";

export default class Hi implements ICommand{
    name: string = "hello";
    execute(source:Message, arg: string[]){
        source.channel.send(`Hello <@${source.author.id}>`);
    }
}