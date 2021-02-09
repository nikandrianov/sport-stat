import { SET_CATEGORY_LEAGUE } from '../actions/types';

const initialState = {
    category: 'PL',
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_LEAGUE:
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

export default filters;
