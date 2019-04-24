export default interface IEvent{
    readonly name: string;
    execute(source:any): void;
}