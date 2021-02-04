import { combineReducers } from 'redux';
import england from './england';
import leagues from './listleague';

const allReducers = combineReducers({
    england,
    leagues,
});

export default allReducers;
