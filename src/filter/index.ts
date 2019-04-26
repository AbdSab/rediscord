import IFilter from './IFilter';
import IsAdminFilter from './IsAdminFilter';
import IsNotBotFilter from './IsNotBotFilter';

const filters:Map<string, IFilter> = new Map();

filters.set("isAdmin", new IsAdminFilter());

const defaultFilters:Map<string, IFilter> = new Map();
defaultFilters.set("isNotBot", new IsNotBotFilter());

export {filters,defaultFilters};