import React from 'react';
import style from './league.module.scss';

const League = ({ area, name, emblemUrl }) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.img}>
                    <img
                        src={
                            emblemUrl === null
                                ? `https://серебро.рф/img/placeholder.png`
                                : emblemUrl
                        }
                        alt=""
                    />
                </div>
                <div className={style.footer}>
                    <div className={style.title}>{name}</div>
                    <div className={style.subtitle}>{area.name}</div>
                </div>
            </div>
        </div>
    );
};

export default League;
