import IFilter from './IFilter';
import IsAdminFilter from './IsAdminFilter';
import IsBotFilter from './IsBotFilter';

const filters:Map<string, IFilter> = new Map();

filters.set("isAdmin", new IsAdminFilter());
filters.set("isBot", new IsBotFilter());

export default filters;