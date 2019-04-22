import Discord, { Client } from 'discord.js';
import config from '../config.json';

import events from './event';

export class Bot{
    token: string;
    client: Client;
    
    public constructor(token: string) {
        this.token = token;
        this.client = new Discord.Client();
    }

    public start(){
        this.client.login(config.token);
        this.events();
    }

    public events(){
        events.forEach(e => {
            this.client.on(e.name, async (arg)=>{e.execute(arg)})
        });
    }

    
}
