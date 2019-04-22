import IEvent from './IEvent';

export default class Ready implements IEvent{
    readonly name: string = "ready";
    execute(arg:any){
        console.log("Bot started and ready");
    }
}
