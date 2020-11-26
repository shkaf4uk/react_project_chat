import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import photoOleg from '../../images/photo_2020-09-22_12-54-35.jpg';
import photoMaks from '../../images/photo_2017-12-12_07-20-49.jpg';
import photoSlava from '../../images/photo_2019-09-30_11-53-48.jpg';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'} >Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to={'/dialogs'}>Massages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/friends'} className={style.friend__link}>Friends</NavLink>
                <div className={style.friends}>
                    <NavLink to={'/friends'} >
                        <img src={photoOleg} alt={'photoOleg'}/>
                        <span>Oleg</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoMaks} alt={'photoMaks'}/>
                        <span>Maks</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoSlava} alt={'photoSlava'}/>
                        <span>Slava</span>
                    </NavLink>
                </div>
                <div className={style.friends}>
                    <NavLink to={'/friends'} >
                        <img src={photoOleg} alt={'photoOleg'}/>
                        <span>Oleg</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoMaks} alt={'photoMaks'}/>
                        <span>Maks</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoSlava} alt={'photoSlava'}/>
                        <span>Slava</span>
                    </NavLink>
                </div>
                <div className={style.friends}>
                    <NavLink to={'/friends'} >
                        <img src={photoOleg} alt={'photoOleg'}/>
                        <span>Oleg</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoMaks} alt={'photoMaks'}/>
                        <span>Maks</span>
                    </NavLink>
                    <NavLink to={'/friends'} >
                        <img src={photoSlava} alt={'photoSlava'}/>
                        <span>Slava</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;