import { SET_LIST_TEAM } from './types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
});

export const fetchListTeam = (category) => (dispatch) => {
    instance
        .get(`competitions/${category !== null ? `${category}` : ''}/teams`)
        .then(({ data }) => {
            dispatch(setTeams(data));
        });
};

export const setTeams = (items) => ({
    type: SET_LIST_TEAM,
    payload: items,
});
