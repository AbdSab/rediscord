import {Client} from "discord.js";

export default interface IEvent{
    readonly name: string;
    execute(client:Client, source:any): void;
}