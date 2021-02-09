import { combineReducers } from 'redux';
import leagues from './listleague';
import teams from './listteam';
import filters from './team-filters';
import calendarLeague from './calendar.league';

const allReducers = combineReducers({
    leagues,
    filters,
    teams,
    calendarLeague,
});

export default allReducers;
