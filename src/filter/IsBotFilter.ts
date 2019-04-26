import IFilter from './IFilter';

export default class IsBotFilter implements IFilter{
    name: string = "isBot";
    process({author}, command){
        console.log(command);
        return !author.bot;
    };
}