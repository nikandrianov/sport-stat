import { combineReducers } from 'redux';
import leagues from './listleague';
import teams from './listteam';
import filters from './team-filters';
import filterTeam from './filters.team';
import calendarLeague from './calendar.league';
import calendarTeam from './calendar.team';
import dateLeague from './date.league';

const allReducers = combineReducers({
    leagues,
    filters,
    teams,
    calendarLeague,
    calendarTeam,
    dateLeague,
    filterTeam,
});

export default allReducers;
