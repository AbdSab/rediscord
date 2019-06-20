import Discord, { Client } from 'discord.js';
import events from './events';

/**
 * The bot.
 */
export class Bot{
    /**
     * Token from the discordapp.
     */
    token: string;

    /**
     * Discord.js client.
     */
    client: Client;

    /**
     * Applying the token.
     * @param token
     */
    public constructor(token: string) {
        this.token = token;
        this.client = new Discord.Client();
    }

    /**
     * Starting the bot.
     */
    async start(){
        console.log("Starting ...");
        this.events().catch(err=>console.log(err));
        this.client.login(this.token).catch(err=>console.log(err));
    }

    /**
     * Execute the events.
     */
    async events(){
        events.forEach((event, eventName) => {
            this.client.on(eventName, source=>{
                event.execute(this.client, source);
            });
        });
    }

    
}
