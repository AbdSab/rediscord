
export default interface IFilter{
    name: string;
    process(source, args);
}