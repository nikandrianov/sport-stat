import React from 'react';
import style from './header.module.scss';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.body}>
                    <Link to="/" className={style.logo}>
                        SoccerStat
                    </Link>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
