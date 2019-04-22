export default interface IEvent{
    readonly name: string;
    execute(arg:any): void;
}