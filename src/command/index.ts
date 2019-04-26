import ICommand from './ICommand';
import HiCommand from './HiCommand';
import CreateTeamCommand from "./CreateTeamCommand";
import ShowTeamCommand from "./ShowTeamCommand";

const commands:Map<string ,ICommand> = new Map();

commands.set("hello", new HiCommand());
commands.set("create-team", new CreateTeamCommand());
commands.set("teams", new ShowTeamCommand());

export default commands;