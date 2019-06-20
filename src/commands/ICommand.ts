/**
 * Interface for Command.
 */
export default interface ICommand{
    /**
     * The name of the command.
     */
    name: string;

    /**
     * Filters to apply to this command.
     */
    filters: string[];

    /**
     * The code that will be executed for this command.
     * @param source
     * @param args
     */
    execute(source: any, args: string[]);
}