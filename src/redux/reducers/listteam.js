import { SET_LIST_TEAM } from '../actions/types';

const initialState = {
    items: [],
};

const getListTeams = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_TEAM:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getListTeams;
