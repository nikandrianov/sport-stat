import React from 'react';
import style from './date.module.scss';

const DateForm = ({
    startDate,
    endDate,
    onSelectDateLeague,
    onClearDateLeague,
    handleDateStartChange,
    handleDateEndChange,
}) => {
    return (
        <div className={style.date}>
            <label htmlFor="dateInput1">Период с:</label>
            <input
                id="dateInput1"
                type="date"
                className={style.dateInput}
                value={startDate}
                onChange={handleDateStartChange}
            />
            <label htmlFor="dateInput2">Период по:</label>
            <input
                id="dateInput2"
                type="date"
                className={style.dateInput}
                value={endDate}
                onChange={handleDateEndChange}
            />
            <button className={style.btn} onClick={() => onSelectDateLeague(startDate, endDate)}>
                Пуск
            </button>
            <button className={style.btn} onClick={() => onClearDateLeague(startDate, endDate)}>
                Очистить
            </button>
        </div>
    );
};

export default DateForm;
