import IEvent from './IEvent';
import IMiddleware from '../middleware/IMiddleware';
import Message from '../class/Message';
import commands from '../command';

export default class MessageEvent implements IEvent {
    readonly name: string = "message";
    execute(arg:any){
         const message: Message = new Message(arg);
         commands.forEach(command => {
            if(command.name === message.getCommand()){
                command.execute(message.getArgs());
            }
         })
    }
}
