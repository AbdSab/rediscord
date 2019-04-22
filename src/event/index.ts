import IEvent from './IEvent';
import Message from './Message';
import GuildMemberAdd from './GuildMemberAdd';
import Ready from './Ready';

let events:IEvent[] = [];

events.push(new Ready());
events.push(new GuildMemberAdd());
events.push(new Message());

export default events;