import IFilter from './IFilter';
import IsAdminFilter from './IsAdminFilter';
import IsBotFilter from './IsBotFilter';

const filters:IFilter[] = [];

filters.push(new IsAdminFilter());
filters.push(new IsBotFilter());

export default filters;