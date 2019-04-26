import ICommand from './ICommand';

export default class SaveMeCommand implements ICommand{
    name: string = "create-team";
    filters: string[] = [];

    async execute(source:any, args: string[]){

    }
}