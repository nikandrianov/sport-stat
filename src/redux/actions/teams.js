import { SET_TEAMS } from './types';
import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://api.football-data.org/v2/',
//     headers: { 'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb' },
// });

export const fetchTeams = () => (dispatch) => {
    axios
        .get('https://api.football-data.org/v2/competitions/PL/teams', {
            headers: {
                'X-Auth-Token': '79b4fa5a64df40cdb600d686c41d22fb',
            },
        })
        .then(({ data }) => {
            dispatch(setTeams(data.teams));
        });
};

export const setTeams = (items) => ({
    type: SET_TEAMS,
    payload: items,
});
