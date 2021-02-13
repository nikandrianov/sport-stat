import React from 'react';
import style from './cal-team.module.scss';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCalendarTeam } from '../../redux/actions/calendar.team';
import { fetchListLeague } from '../../redux/actions/listleague';
import { fetchListTeam } from '../../redux/actions/listteam';
import { setCategoryLeague } from '../../redux/actions/team-filters';
import { setCategoryTeam } from '../../redux/actions/filters.team';
import { setDateFrom, setDateTo } from '../../redux/actions/date.league';

import DateForm from '../../components/DateForm';
import TeamInfo from '../../components/TeamInfo/TeamInfo';

const CalendarLeague = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);
    const calendar = useSelector(({ calendarTeam }) => calendarTeam.items.matches);
    const teams = useSelector(({ teams }) => teams.items.teams);
    const category = useSelector(({ filters }) => filters.category);
    const team = useSelector(({ filterTeam }) => filterTeam.team);
    const { dateFrom, dateTo } = useSelector(({ dateLeague }) => dateLeague);

    React.useEffect(() => {
        dispatch(fetchListLeague());
        dispatch(fetchListTeam(category));
        dispatch(fetchCalendarTeam(team, dateFrom, dateTo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, team, dateFrom, dateTo]);

    const onSelectCategory = (league) => {
        dispatch(setCategoryLeague(league));
    };

    const onSelectTeam = (team) => {
        dispatch(setCategoryTeam(team));
    };

    const onSelectDateLeague = (dateFrom, dateTo) => {
        if (dateFrom < dateTo) {
            dispatch(setDateFrom(dateFrom));
            dispatch(setDateTo(dateTo));
        } else {
            alert('Период С должен иметь дату раньше, чем указано в Периоде ПО');
        }
    };

    const onClearDateLeague = (dateFrom, dateTo) => {
        dispatch(setDateFrom((dateFrom = null)));
        dispatch(setDateTo((dateTo = null)));
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
                {teams ? (
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
                        <div className={style.team}>
                            <ul>
                                {teams &&
                                    teams.map((elem) => (
                                        <li
                                            key={elem.id}
                                            onClick={() => onSelectTeam(elem.id)}
                                            className={team === elem.id ? style.active : ''}>
                                            {elem.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <DateForm
                            startDate={startDate}
                            endDate={endDate}
                            onSelectDateLeague={onSelectDateLeague}
                            onClearDateLeague={onClearDateLeague}
                            handleDateStartChange={handleDateStartChange}
                            handleDateEndChange={handleDateEndChange}
                        />
                        {calendar && calendar.map((obj) => <TeamInfo key={obj.id} {...obj} />)}
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
