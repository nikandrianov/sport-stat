import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.items}>
                <li>
                    <Link to="/" className={`${style.link} ${style.active}`}>
                        Список лиг
                    </Link>
                </li>
                <li>
                    <Link to="/teams" className={style.link}>
                        Список команд
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Календарь лиги
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Календарь одной команды
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
