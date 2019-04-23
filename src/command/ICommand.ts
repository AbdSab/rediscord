import { Message } from "discord.js";

export default interface ICommand{
    name: string;
    message: Message;
    execute(args: string[]);
}