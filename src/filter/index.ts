import IFilter from './IFilter';
import IsAdminFilter from './IsAdminFilter';
import IsNotBotFilter from './IsNotBotFilter';


/**
 * List of filters.
 * @remark
 * Add your filters that you want to be used.
 */
const filters:Map<string, IFilter> = new Map();
filters.set("isAdmin", new IsAdminFilter());

/**
 * List of default filters, they will be executed for all commands.
 * @remark
 * Add your filters that you want to be set as default.
 */
const defaultFilters:Map<string, IFilter> = new Map();
defaultFilters.set("isNotBot", new IsNotBotFilter());

export {filters,defaultFilters};