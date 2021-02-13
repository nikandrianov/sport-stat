import { SET_CATEGORY_TEAM } from '../actions/types';

const initialState = {
    team: 57,
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_TEAM:
            return { ...state, team: action.payload };
        default:
            return state;
    }
};

export default filters;
