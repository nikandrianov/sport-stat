import { SET_DATE_FROM_LEAGUE, SET_DATE_TO_LEAGUE } from './types';

export const setDateFrom = (dateFrom) => ({
    type: SET_DATE_FROM_LEAGUE,
    payload: dateFrom,
});

export const setDateTo = (dateTo) => ({
    type: SET_DATE_TO_LEAGUE,
    payload: dateTo,
});
