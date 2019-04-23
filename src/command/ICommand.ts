
export default interface ICommand{
    name: string;
    filters: string[];
    execute(source: any, args: string[]);
}