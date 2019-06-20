import IException from "./IException";

/**
 * TODO: Implement Exceptions
 */
export default class PermissionException implements IException{
    /**
     * @inheritDoc
     */
    readonly message: string;

}