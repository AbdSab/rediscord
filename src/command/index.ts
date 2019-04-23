import ICommand from './ICommand';
import Hi from './Hi';

let commands:ICommand[] = [];

commands.push(new Hi());

export default commands;