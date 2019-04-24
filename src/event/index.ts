import IEvent from './IEvent';
import MessageEvent from './MessageEvent';
import GuildMemberAddEvent from './GuildMemberAddEvent';
import ReadyEvent from './ReadyEvent';
import JoinGuildEvent from "./JoinGuildEvent";

const events:Map<string, IEvent> = new Map();

events.set("ready", new ReadyEvent());
events.set("guildMemberAdd", new GuildMemberAddEvent());
events.set("guildCreate", new JoinGuildEvent());
events.set("message", new MessageEvent());

export default events;