import React from 'react';
import facebook from '../../assets/img/icons/facebook.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import twitter from '../../assets/img/icons/twitter.svg';
import google from '../../assets/img/icons/google.svg';
import style from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.body}>
                    <div className={style.copyright}>© 2021 - All Rights Reserved</div>
                    <div className={style.social}>
                        <Link to="#" className={style.facebook}>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link to="#" className={style.instagram}>
                            <img src={instagram} alt="" />
                        </Link>
                        <Link to="#" className={style.twitter}>
                            <img src={twitter} alt="" />
                        </Link>
                        <Link to="#" className={style.google}>
                            <img src={google} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
