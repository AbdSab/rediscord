
export interface ICommand{
    name: string;
    execute(message: string, ...args: any);
}