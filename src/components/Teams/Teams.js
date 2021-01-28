import React from 'react';
import PropTypes from 'prop-types';
import style from './teams.module.scss';

const Teams = ({ index, name, crestUrl }) => {
    return (
        <div className={style.column}>
            <div className={style.content}>
                <div className={style.number}>{index + 1}</div>
                <div className={style.team}>
                    <div className={style.name}>{name}</div>
                    <div className={style.img}>
                        <img src={crestUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Teams.propTypes = {
    name: PropTypes.string,
    crestUrl: PropTypes.string,
    index: PropTypes.number,
};

Teams.defaultProps = {
    name: '---',
    crestUrl: 'https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png',
};

export default Teams;
