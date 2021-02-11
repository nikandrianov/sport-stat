import { combineReducers } from 'redux';
import leagues from './listleague';
import teams from './listteam';
import filters from './team-filters';
import calendarLeague from './calendar.league';
import dateLeague from './date.league';

const allReducers = combineReducers({
    leagues,
    filters,
    teams,
    calendarLeague,
    dateLeague,
});

export default allReducers;
