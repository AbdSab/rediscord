import ICommand from './ICommand';
import HiCommand from './HiCommand';

/**
 * List of commands.
 * @remark
 * Add your commands you want to be executed to the list.
 */
const commands:Map<string ,ICommand> = new Map();

commands.set("hi", new HiCommand());

export default commands;