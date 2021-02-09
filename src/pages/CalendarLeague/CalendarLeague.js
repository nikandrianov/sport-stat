import React from 'react';
import style from './cal-league.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCalendarLeague } from '../../redux/actions/calendar.league';
import { setCategoryLeague } from '../../redux/actions/team-filters';

import Calendar from '../../components/CalendarLeague';

const CalendarLeague = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);
    const calendar = useSelector(({ calendarLeague }) => calendarLeague.items.matches);
    const category = useSelector(({ filters }) => filters.category);

    React.useEffect(() => {
        dispatch(fetchCalendarLeague(category));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const onSelectCategory = (league) => {
        dispatch(setCategoryLeague(league));
    };

    return (
        <section className={style.calendar}>
            <div className="container">
                <div className={style.league}>
                    <ul>
                        {leagues &&
                            leagues.map((elem) => (
                                <li
                                    key={elem.id}
                                    onClick={() => onSelectCategory(elem.code)}
                                    className={category === elem.code ? style.active : ''}>
                                    {elem.name}
                                </li>
                            ))}
                    </ul>
                </div>
                {calendar &&
                    calendar.map((obj) => (
                        <div className={style.matchday}>
                            Дата и время: <p>{obj.utcDate}</p>
                            <Calendar key={obj.id} {...obj} />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default CalendarLeague;
