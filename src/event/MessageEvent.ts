import IEvent from './IEvent';
import MessageHelper from '../helper/MessageHelper';
import commands from '../command';
import config from '../config.json';
import FilterChain from "../filter/FilterChain";

export default class MessageEvent implements IEvent {
    readonly name: string = "message";
    async execute(source:any){
        const message: MessageHelper = new MessageHelper(source.content);
        if(message.prefix === config.prefix){
            if(commands.has(message.command)){
                const currentCommand = commands.get(message.command);
                const filterChain: FilterChain = new FilterChain(currentCommand.filters);
                filterChain.setCommand(currentCommand);
                filterChain.execute(source, message.args);
            }
        }
    }
}
