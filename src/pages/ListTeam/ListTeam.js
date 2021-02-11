import React from 'react';
import style from './listteam.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListTeam } from '../../redux/actions/listteam';
import { setCategoryLeague } from '../../redux/actions/team-filters';

import Teams from '../../components/Teams';

const ListTeam = () => {
    const dispatch = useDispatch();
    const leagues = useSelector(({ leagues }) => leagues.items.competitions);
    const teams = useSelector(({ teams }) => teams.items.teams);
    const category = useSelector(({ filters }) => filters.category);

    React.useEffect(() => {
        dispatch(fetchListTeam(category));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const onSelectCategory = (league) => {
        dispatch(setCategoryLeague(league));
    };

    return (
        <section className={style.listteam}>
            <div className="container">
                {teams ? (
                    <>
                        <div className={style.league}>
                            <ul>
                                {leagues &&
                                    leagues.map((elem) => (
                                        <li
                                            key={elem.id}
                                            onClick={() => onSelectCategory(elem.code)}
                                            className={category === elem.code ? style.active : ''}>
                                            {elem.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className={style.team}>
                            <div className={style.top_team}>
                                <div className={style.number}>№</div>
                                <div className={style.title}>Команда</div>
                            </div>
                            {teams &&
                                teams.map((obj, index) => (
                                    <Teams key={obj.id} {...obj} index={index} />
                                ))}
                        </div>
                    </>
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

export default ListTeam;
