import React from 'react';
import style from './cal-league.module.scss';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCalendarLeague } from '../../redux/actions/calendar.league';
import { setCategoryLeague } from '../../redux/actions/team-filters';
import { setDateFrom, setDateTo } from '../../redux/actions/date.league';

import Calendar from '../../components/CalendarLeague';

const CalendarLeague = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);
    const calendar = useSelector(({ calendarLeague }) => calendarLeague.items.matches);
    const category = useSelector(({ filters }) => filters.category);
    const { dateFrom, dateTo } = useSelector(({ dateLeague }) => dateLeague);

    console.log(dateFrom, dateTo, category);

    React.useEffect(() => {
        dispatch(fetchCalendarLeague(category, dateFrom, dateTo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, dateFrom, dateTo]);

    const onSelectCategory = (league) => {
        dispatch(setCategoryLeague(league));
    };

    const onSelectDateLeague = (dateFrom, dateTo) => {
        if (dateFrom < dateTo) {
            dispatch(setDateFrom(dateFrom));
            dispatch(setDateTo(dateTo));
        } else {
            alert('Параметр dateFrom должен иметь дату раньше, чем указано в dateTo');
        }
    };

    const [startDate, setStartDate] = React.useState(moment());
    const [endDate, setEndDate] = React.useState(moment().add(7, 'days'));

    const handleDateStartChange = (startDate) => {
        setStartDate(startDate.target.value);
    };
    const handleDateEndChange = (endDate) => {
        setEndDate(endDate.target.value);
    };

    return (
        <section className={style.calendar}>
            <div className="container">
                {calendar ? (
                    <>
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
                        <div className="date">
                            <input type="date" value={startDate} onChange={handleDateStartChange} />
                            <input type="date" value={endDate} onChange={handleDateEndChange} />
                            <button onClick={() => onSelectDateLeague(startDate, endDate)}>
                                Пуск
                            </button>
                        </div>
                        {calendar && calendar.map((obj) => <Calendar key={obj.id} {...obj} />)}
                    </>
                ) : (
                    <div>
                        Произошла ошибка с сервером API, пожалуйста перезагрузите страницу через 1
                        минуту, если страница останется пустой, то следует повторить действия по
                        перезагрузке страницы (такова особенность сервера API)
                    </div>
                )}
            </div>
        </section>
    );
};

export default CalendarLeague;
