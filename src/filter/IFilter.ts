import {Message} from 'discord.js';

export interface IFilter{
    filter(message: Message): Message;
}