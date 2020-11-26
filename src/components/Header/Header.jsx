import React from 'react';
import style from './Header.module.css';
import logo from './../../images/imgonline-com-ua-Transparent-backgr-pSoQRd3zCmlQ.png';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt={'logo'}/>
            <span className={style.web}>Web</span>
            <span className={style.chat}>Chat</span>
        </header>
    )
}

export default Header;