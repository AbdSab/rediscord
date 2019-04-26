import IFilter from './IFilter';

export default class IsNotBotFilter implements IFilter{
    name: string = "isNotBot";
    process({author}, args){
        return !author.bot;
    };
}