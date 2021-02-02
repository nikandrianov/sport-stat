import { SET_ENG, SET_CALENDAR } from '../actions/types';

const initialState = {
    items: {},
    calendar: {},
};

const getEngland = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENG:
            return { ...state, items: action.payload };
        case SET_CALENDAR:
            return { ...state, calendar: action.payload };
        default:
            return state;
    }
};

export default getEngland;
