import ICommand from './ICommand';
import { Message } from 'discord.js';

export default class Hi implements ICommand{
    name: string = "hello";
    message: Message;
    public constructor(message: Message){
        this.message = message;
    }
    execute(arg: string[]){
        
    }
}