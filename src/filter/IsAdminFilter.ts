import IFilter from './IFilter';

/**
 * A simple filter to check whatever the owner of the command is admin.
 */
export default class IsAdmin implements IFilter{
    /**
     * @inheritDoc
     */
    name: string = "isAdmin";

    /**
     * @inheritDoc
     */
    process(source, args){
        //Code here.
    };
}