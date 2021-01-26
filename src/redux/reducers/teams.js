import { SET_TEAMS } from '../actions/types';

const initialState = {
    items: [],
};

const getTeams = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getTeams;
