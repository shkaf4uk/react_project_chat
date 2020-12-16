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
                {console.log(props)}
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;