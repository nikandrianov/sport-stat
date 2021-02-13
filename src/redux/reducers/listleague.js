import { SET_LIST_LEAGUE } from '../actions/types';

const initialState = {
    items: [],
};

const getListLeague = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_LEAGUE:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getListLeague;
