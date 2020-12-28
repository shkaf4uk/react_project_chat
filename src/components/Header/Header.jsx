import React from 'react';
import style from './Header.module.css';
import logo from './../../images/imgonline-com-ua-Transparent-backgr-pSoQRd3zCmlQ.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} alt={'logo'}/>
            <span className={style.web}>Web</span>
            <span className={style.chat}>Chat</span>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div><span className={style.login_user}>{props.login}</span> - <button className={'btn btn-secondary'} onClick={props.logout}>Logout</button></div>
                    : <NavLink className={'btn btn-secondary'} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;