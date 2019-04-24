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
        let canExecute = true;
        if(message.prefix === config.prefix){
            if(commands.has(message.command)){
                const currentCommand = commands.get(message.command);
                //TODO: Change how filters works
                filters.forEach(filter => {
                    canExecute = filter.process(source, currentCommand);
                });
                if(canExecute) currentCommand.execute(source, message.args).catch(err=>console.log(err));
            }
        }
    }
}
