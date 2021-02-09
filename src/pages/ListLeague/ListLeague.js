import React from 'react';
import style from './league.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListLeague } from '../../redux/actions/listleague';

import League from '../../components/League/';

const ListLeague = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);
    console.log(leagues);

    React.useEffect(() => {
        dispatch(fetchListLeague());
    });

    return (
        <section className={style.listleague}>
            <div className="container">
                <div className={style.league}>
                    {leagues && leagues.map((obj) => <League key={obj.id} {...obj} />)}
                </div>
            </div>
        </section>
    );
};

export default ListLeague;
