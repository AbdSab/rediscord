import IEvent from './IEvent';
import MessageHelper from '../helper/MessageHelper';
import commands from '../commands';
import config from '../config.json';
import FilterChain from "../filter/FilterChain";
import {Client} from "discord.js";

/**
 * Essential event, responsible of executing the command.
 */
export default class MessageEvent implements IEvent {
    /**
     * @InheritDoc
     */
    readonly name: string = "message";

    /**
     * @inheritDoc
     */
    async execute(client:Client, source:any){
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
