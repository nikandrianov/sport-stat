import { SET_CALENDAR_LEAGUE } from './types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
});

export const fetchCalendarLeague = (category, dateFrom, dateTo) => (dispatch) => {
    instance
        .get(
            `competitions/${category !== null ? `${category}` : ''}/matches?${
                dateFrom && dateTo !== null
                    ? `dateFrom=${dateFrom}&dateTo=${dateTo}`
                    : `status=SCHEDULED`
            }`,
        )
        .then(({ data }) => {
            dispatch(setCalendarLeague(data));
        });
    console.log(dateFrom, dateTo, category);
};

export const setCalendarLeague = (items) => ({
    type: SET_CALENDAR_LEAGUE,
    payload: items,
});
