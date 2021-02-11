import React from 'react';
import PropTypes from 'prop-types';
import style from './calendar.module.scss';

const CalendarLeague = ({ homeTeam, score, awayTeam, utcDate, matchday }) => {
    return (
        <div className={style.column}>
            <div className={style.content}>
                <div className={style.date}>{utcDate}</div>
                <div className={style.team}>
                    <div className={style.name}>{homeTeam.name}</div>
                    <div className={style.score}>
                        {score.fullTime.homeTeam === null
                            ? `-:-`
                            : `${score.fullTime.homeTeam} : ${score.fullTime.awayTeam}`}
                    </div>
                    <div className={style.name_away}>{awayTeam.name}</div>
                </div>
                <div className={style.matchday}>Тур: {matchday}</div>
            </div>
        </div>
    );
};

CalendarLeague.propTypes = {
    homeTeam: PropTypes.object,
    score: PropTypes.object,
    awayTeam: PropTypes.object,
};

export default CalendarLeague;
