import { SET_LIST_LEAGUE } from './types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
});

export const fetchListLeague = () => (dispatch) => {
    instance.get('competitions?plan=TIER_ONE').then(({ data }) => {
        dispatch(setListLeague(data));
    });
};

export const setListLeague = (items) => ({
    type: SET_LIST_LEAGUE,
    payload: items,
});
