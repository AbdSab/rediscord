import IFilter from './IFilter';
import ICommand from "../command/ICommand";

export default class IsAdmin implements IFilter{
    process(command: ICommand){
        if(command.message.member.roles.find("name", "admin")){
            
        }else{
            //return this.next();
        }
        this.next(command);
    }
    next(command: ICommand){}
}