import React from 'react';
import style from './listteam.module.scss';
import { useSelector } from 'react-redux';

import Teams from '../../components/Teams';

const ListTeam = () => {
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);

    return (
        <section className="container">
            <div className="league">{leagues && leagues.map((elem) => elem.name)}</div>
            <div className={style.team}>
                <div className={style.top_team}>
                    <div className={style.number}>№</div>
                    <div className={style.title}>Команда</div>
                </div>
                <Teams />
            </div>
        </section>
    );
};

export default ListTeam;
