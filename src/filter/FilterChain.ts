import ICommand from "../command/ICommand";
import IFilter from "./IFilter";

export default class FilterChain{
    private filters: IFilter[] = [];
    private command: ICommand;

    addFilter(filter: IFilter){
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