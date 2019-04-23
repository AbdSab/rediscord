import ICommand from './ICommand';
import HiCommand from './HiCommand';
//TODO: Change index structure;
let commands:ICommand[] = [];

commands.push(new HiCommand());

export default commands;