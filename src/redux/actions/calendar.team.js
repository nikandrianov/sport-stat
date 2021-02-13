import { SET_CALENDAR_TEAM } from './types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
});

export const fetchCalendarTeam = (team, dateFrom, dateTo) => (dispatch) => {
    instance
        .get(
            `teams/${team !== null ? `${team}` : ''}/matches?${
                dateFrom && dateTo !== null
                    ? `dateFrom=${dateFrom}&dateTo=${dateTo}`
                    : `status=SCHEDULED`
            }`,
        )
        .then(({ data }) => {
            dispatch(setCalendarTeam(data));
        });
};

export const setCalendarTeam = (items) => ({
    type: SET_CALENDAR_TEAM,
    payload: items,
});
