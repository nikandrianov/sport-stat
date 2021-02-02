import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEng } from '../../redux/actions/england';
import style from './eng.module.scss';

import Teams from '../../components/Teams';
import CalendarLeague from '../../components/CalendarLeague/';

const England = () => {
    const dispatch = useDispatch();
    const teams = useSelector(({ england }) => england.items.teams);
    const league = useSelector(({ england }) => england.items.competition);
    const season = useSelector(({ england }) => england.items.season);
    const calendar = useSelector(({ england }) => england.calendar.matches);

    React.useEffect(() => {
        dispatch(fetchEng());
    });

    return (
        <section className="container">
            <div className={style.column}>
                <div className={style.teams}>
                    <div className={style.top}>
                        <div className={style.top_team}>
                            <div className={style.number}>№</div>
                            <div className={style.title}>Команда</div>
                        </div>
                        <div className={style.season}>
                            {season && `${season.startDate} / ${season.endDate}`}
                        </div>
                    </div>
                    {teams &&
                        teams.map((obj, index) => <Teams key={obj.id} {...obj} index={index} />)}
                </div>
                <div className={style.calendar}>
                    <div className={style.bottom}>
                        Календарь {league && league.name}
                        <div className={style.matchday}>
                            Тур: {calendar && calendar[0].matchday}
                        </div>
                    </div>
                    {calendar && calendar.map((obj) => <CalendarLeague key={obj.id} {...obj} />)}
                </div>
            </div>
        </section>
    );
};

export default England;
