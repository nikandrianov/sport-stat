import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEng } from '../../redux/actions/teams';
import style from './eng.module.scss';

import Teams from '../../components/Teams';

const England = () => {
    const dispatch = useDispatch();
    const teams = useSelector(({ teams }) => teams.items);
    console.log(teams);
    React.useEffect(() => {
        dispatch(fetchEng());
    });

    return (
        <section className="container">
            <div className={style.teams}>
                <div className={style.top}>
                    <div className={style.number}>№</div>
                    <div className={style.title}>Команда</div>
                </div>
                {teams && teams.map((obj, index) => <Teams key={obj.id} {...obj} index={index} />)}
            </div>
        </section>
    );
};

export default England;
