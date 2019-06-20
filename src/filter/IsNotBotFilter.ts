import IFilter from './IFilter';

/**
 * A simple filter to check if the owner of the command is a bot or not.
 */
export default class IsNotBotFilter implements IFilter{
    /**
     * @inheritDoc
     */
    name: string = "isNotBot";

    /**
     * @inheritDoc
     */
    process({author}, args){
        return !author.bot;
    };
}