import { Message } from "discord.js";

export default interface ICommand{
    name: string;
    execute(source: Message, args: string[]);
}