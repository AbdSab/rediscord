import ICommand from './ICommand';
import HiCommand from './HiCommand';
import CreateTeamCommand from "./CreateTeamCommand";
import ShowTeamCommand from "./ShowTeamCommand";

/**
 * List of commands.
 * @remark
 * Add your commands you want to be executed to the list.
 */
const commands:Map<string ,ICommand> = new Map();

commands.set("hello", new HiCommand());
commands.set("create-team", new CreateTeamCommand());
commands.set("teams", new ShowTeamCommand());

export default commands;