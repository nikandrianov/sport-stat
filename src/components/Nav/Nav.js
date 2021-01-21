import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.items}>
                <li>
                    <Link to="/" className={`${style.link} ${style.active}`}>
                        Англия
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Германия
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Испания
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Франция
                    </Link>
                </li>
                <li>
                    <Link to="#" className={style.link}>
                        Португалия
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
