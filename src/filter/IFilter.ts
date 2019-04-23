import ICommand from "../command/ICommand";

export default interface IFilter{
    process(command: ICommand);
    next(request, response);
}