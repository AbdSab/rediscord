import IFilter from './IFilter';
import ICommand from "../command/ICommand";

export default class IsAdmin implements IFilter{
    name: string = "isAdmin";
    process(source, command){
    };
}