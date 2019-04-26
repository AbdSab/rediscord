import FilterChain from "./FilterChain";
import ICommand from "../command/ICommand";
import IFilter from "./IFilter";

export default class FilterManager{
    filterChain: FilterChain;
    public constructor(command: ICommand){
        this.filterChain = new FilterChain();
        this.filterChain.setCommand(command);
    }
    setFilter(filter:IFilter){
        this.filterChain.addFilter(filter);
    }
    filterCommand(source:any, args:string[]){
        this.filterChain.execute(source, args);
    }
}