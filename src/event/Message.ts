import IEvent from './IEvent';

export default class Message implements IEvent{
    readonly name: string = "message";
    execute(arg:any){
        
    }
}
