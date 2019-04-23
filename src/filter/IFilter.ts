import ICommand from "../command/ICommand";

export default interface IFilter{
    name: string;
    process(request, response);
}