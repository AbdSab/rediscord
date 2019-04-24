import ICommand from './ICommand';
import HiCommand from './HiCommand';
import SaveMeCommand from "./SaveMeCommand";
import CreateTeamCommand from "./CreateTeamCommand";

const commands:Map<string ,ICommand> = new Map();

commands.set("hello", new HiCommand());
commands.set("saveme", new SaveMeCommand());
commands.set("create-team", new CreateTeamCommand());

export default commands;