import { SET_CALENDAR_LEAGUE } from '../actions/types';

const initialState = {
    items: [],
};

const getCalendarLeague = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALENDAR_LEAGUE:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getCalendarLeague;
