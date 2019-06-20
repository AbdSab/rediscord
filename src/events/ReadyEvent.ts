import IEvent from './IEvent';

/**
 * The event that will be executed if the bot start.
 */
export default class ReadyEvent implements IEvent{
    /**
     * @inheritDoc
     */
    readonly name: string = "ready";

    /**
     * @inheritDoc
     */
    async execute({users, guilds}, source:any){
        console.log("Bot started and ready");
        console.log(`Guilds: ${guilds.size}`);
        console.log(`Users: ${users.size}`);
    }
}
