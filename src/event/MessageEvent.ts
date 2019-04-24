import IEvent from './IEvent';
import MessageHelper from '../helper/MessageHelper';
import IFilter from "../filter/IFilter";
import commands from '../command';
import filters from '../filter';
import config from '../config.json';

export default class MessageEvent implements IEvent {
    readonly name: string = "message";
    async execute(source:any){
        const message: MessageHelper = new MessageHelper(source.content);
        if(message.prefix === config.prefix)
            if(commands.has(message.command))
               commands.get(message.command).execute(source, message.args);
    }
}
