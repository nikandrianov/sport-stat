import { SET_ENG, SET_CALENDAR } from './types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
});

export const fetchEng = () => (dispatch) => {
    instance.get('competitions/PL/teams').then(({ data }) => {
        dispatch(setEng(data));
    });
    instance.get('competitions/PL/matches?status=SCHEDULED').then(({ data }) => {
        dispatch(setCalendar(data));
    });
};

export const setEng = (items) => ({
    type: SET_ENG,
    payload: items,
});

export const setCalendar = (items) => ({
    type: SET_CALENDAR,
    payload: items,
});
