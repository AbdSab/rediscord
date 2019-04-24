import ICommand from './ICommand';
import HiCommand from './HiCommand';

const commands:Map<string ,ICommand> = new Map();

commands.set("hello", new HiCommand());

export default commands;