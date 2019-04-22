import { ICommand } from "../command/ICommand";

export default class Middleware{
    protected command: ICommand;
    public constructor(command: ICommand){
        this.command = command;
    }
    execute(){
        
    }
}