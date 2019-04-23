import IEvent from './IEvent';

export default class ReadyEvent implements IEvent{
    readonly name: string = "ready";
    async execute(arg:any){
        console.log("Bot started and ready");
    }
}
