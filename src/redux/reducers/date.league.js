import { SET_DATE_FROM_LEAGUE, SET_DATE_TO_LEAGUE } from '../actions/types';

const initialState = {
    dateFrom: null,
    dateTo: null,
};

const dateLeague = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE_FROM_LEAGUE:
            return { ...state, dateFrom: action.payload };
        case SET_DATE_TO_LEAGUE:
            return { ...state, dateTo: action.payload };
        default:
            return state;
    }
};

export default dateLeague;
