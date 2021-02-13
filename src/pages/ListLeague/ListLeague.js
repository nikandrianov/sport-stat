import React from 'react';
import style from './league.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListLeague } from '../../redux/actions/listleague';

import League from '../../components/League/';

const ListLeague = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);

    React.useEffect(() => {
        dispatch(fetchListLeague());
    });

    return (
        <section className={style.listleague}>
            <div className="container">
                {leagues ? (
                    <div className={style.league}>
                        {leagues && leagues.map((obj) => <League key={obj.id} {...obj} />)}
                    </div>
                ) : (
                    <div>
                        Произошла ошибка с сервером API, пожалуйста перезагрузите страницу через 1
                        минуту, если страница останется пустой, то следует повторить действия по
                        перезагрузке страницы (такова особенность сервера API)
                    </div>
                )}
            </div>
        </section>
    );
};

export default ListLeague;
