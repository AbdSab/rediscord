/**
 * Interface for Filter.
 */
export default interface IFilter{
    /**
     * The name of the filter.
     */
    name: string;

    /**
     * The code to be executed for filtering.
     * @param source
     * @param args
     */
    process(source, args);
}