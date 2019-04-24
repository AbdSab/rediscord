import Discord, { Client } from 'discord.js';
import config from './config.json';
import events from './event';

export class Bot{
    token: string;
    client: Client;
    
    public constructor(token: string) {
        this.token = token;
        this.client = new Discord.Client();
    }

    async start(){
        this.events();
        this.client.login(config.token);
    }

    async events(){
        events.forEach((event, eventName) => {
            this.client.on(eventName, source=>{
                event.execute(source);
            });
        });
    }

    
}
