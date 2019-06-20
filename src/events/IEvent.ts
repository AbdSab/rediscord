import {Client} from "discord.js";

/**
 * Interface of a Event to define the rules.
 */
export default interface IEvent{
    /**
     * The name of the event.
     */
    readonly name: string;

    /**
     * Execute the code if the event is occured.
     * @param client
     * @param source
     */
    execute(client:Client, source:any): void;
}