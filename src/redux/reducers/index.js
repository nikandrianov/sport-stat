import { combineReducers } from 'redux';
import teams from './teams';

const allReducers = combineReducers({
    teams,
});

export default allReducers;
