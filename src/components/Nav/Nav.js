import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.items}>
                <li>
                    <NavLink
                        to="/"
                        className={`${style.link}`}
                        activeClassName={style.active}
                        exact>
                        Список лиг
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/teams"
                        className={style.link}
                        activeClassName={style.active}
                        exact>
                        Список команд
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="calendarleague"
                        className={style.link}
                        activeClassName={style.active}
                        exact>
                        Календарь лиги
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="#" className={style.link} activeClassName={style.active} exact>
                        Календарь одной команды
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default Nav;
