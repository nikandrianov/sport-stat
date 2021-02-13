import { SET_CALENDAR_TEAM } from '../actions/types';

const initialState = {
    items: [],
};

const getCalendarteam = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALENDAR_TEAM:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getCalendarteam;
