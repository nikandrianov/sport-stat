import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeams } from '../../redux/actions/teams';
import style from './eng.module.scss';

const England = () => {
    const dispatch = useDispatch();
    const teams = useSelector(({ teams }) => teams.items);

    React.useEffect(() => {
        dispatch(fetchTeams());
    });

    return (
        <section className="container">
            <div className={style.teams}>{teams && teams.map((elem) => elem.name)}</div>
        </section>
    );
};

export default England;
