import IEvent from './IEvent';
import MessageHelper from '../helper/MessageHelper';
import commands from '../command';

export default class MessageEvent implements IEvent {
    readonly name: string = "message";
    execute(source:any){
         const message: MessageHelper = new MessageHelper(source.content);
         commands.forEach(command => {
            if(command.name === message.getCommand()){
                command.execute(source, message.getArgs());
            }
         })
    }
}
