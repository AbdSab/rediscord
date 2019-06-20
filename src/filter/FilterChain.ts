import ICommand from "../commands/ICommand";
import IFilter from "./IFilter";
import {filters, defaultFilters } from "./index";

/**
 * This class is responsible applying filters before executing a command.
 */
export default class FilterChain{

    private filters: IFilter[] = [];
    private command: ICommand;

    /**
     * Constructor.
     * @param filtersNames - List of filters as string
     */
    public constructor(filtersNames: string[]){
        defaultFilters.forEach(filter => {
            this.addFilter(filter);
        });
        filtersNames.forEach(filterName => {
            if(filters.get(filterName))
                this.addFilter(filters.get(filterName));
        });
    }

    /**
     * Add new filter.
     * @param filter
     */
    private addFilter(filter: IFilter){
        this.filters.push(filter);
    }

    /**
     * Set which command will apply the filters.
     * @param command
     */
    setCommand(command: ICommand){
        this.command = command;
    }

    /**
     * Execute the command if it pass all filters.
     * @param source
     * @param args
     */
    execute(source: any, args: string[]){
        let executeCommand = true;
        this.filters.forEach(filter => {
            if(executeCommand) executeCommand = filter.process(source, args);
        });
        if (executeCommand) this.command.execute(source, args);
    }
}