import IEvent from './IEvent';
import MessageEvent from './MessageEvent';
import GuildMemberAddEvent from './GuildMemberAddEvent';
import ReadyEvent from './ReadyEvent';
import JoinGuildEvent from "./JoinGuildEvent";

let events:IEvent[] = [];

events.push(new ReadyEvent());
events.push(new GuildMemberAddEvent());
events.push(new JoinGuildEvent());
events.push(new MessageEvent());

export default events;