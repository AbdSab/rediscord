import ICommand from "../command/ICommand";
import IFilter from "./IFilter";
import {filters, defaultFilters } from "./index";

export default class FilterChain{
    private filters: IFilter[] = [];
    private command: ICommand;

    public constructor(filtersNames: string[]){
        defaultFilters.forEach(filter => {
            this.addFilter(filter);
        });
        filtersNames.forEach(filterName => {
            if(filters.get(filterName))
                this.addFilter(filters.get(filterName));
        });
    }
    private addFilter(filter: IFilter){
        this.filters.push(filter);
    }
    setCommand(command: ICommand){
        this.command = command;
    }

    execute(source: any, args: string[]){
        let executeCommand = true;
        this.filters.forEach(filter => {
            if(executeCommand) executeCommand = filter.process(source, args);
        });
        if (executeCommand) this.command.execute(source, args);
    }
}