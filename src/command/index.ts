import ICommand from './ICommand';
import HiCommand from './HiCommand';
//TODO: Change index structure;
class commandMap{
    [commandName: string]: string;
}
const commands:ICommand[] = [];

commands.push(new HiCommand());

export default commands;