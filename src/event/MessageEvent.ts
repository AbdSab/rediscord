import IEvent from './IEvent';
import MessageHelper from '../helper/MessageHelper';
import IFilter from "../filter/IFilter";
import commands from '../command';
import filters from '../filter';

export default class MessageEvent implements IEvent {
    readonly name: string = "message";
    async execute(source:any){
         const message: MessageHelper = new MessageHelper(source.content);
         commands.forEach(command => {
             //TODO: Exceute filters
            if(command.name === message.getCommand()){
                command.execute(source, message.getArgs());
            }
         })
    }
}
