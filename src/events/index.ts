import IEvent from './IEvent';
import MessageEvent from './MessageEvent';
import GuildMemberAddEvent from './GuildMemberAddEvent';
import ReadyEvent from './ReadyEvent';
import JoinGuildEvent from "./JoinGuildEvent";

/**
 * List of events.
 * @remark
 * Add your commands you want to be used to the list.
 */
const events:Map<string, IEvent> = new Map();

events.set("ready", new ReadyEvent());
events.set("guildMemberAdd", new GuildMemberAddEvent());
events.set("guildCreate", new JoinGuildEvent());
events.set("message", new MessageEvent());

export default events;