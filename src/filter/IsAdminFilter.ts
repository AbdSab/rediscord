import IFilter from './IFilter';

export default class IsAdmin implements IFilter{
    name: string = "isAdmin";
    process(source, args){
    };
}