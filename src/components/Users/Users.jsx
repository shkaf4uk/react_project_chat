import React from 'react';
import avatar from './../../images/unnamed.png';
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize, ...props}) => {
    console.log('props Users: ', props)
    return <div className={style.allUsers}>
        {props.users.map(u => <div className={style.userInfo} key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : avatar} className={style.userPhoto}
                         alt={''}/>
                </NavLink>
            </div>
            <div className={style.userInfoName}>
                <div><b>Name:</b> {u.name}</div>
                <div><b>Status:</b> {u.status ? u.status : '-----'}</div>
                <div>
                    <button className={style.follow_unFollow_btn} onClick={() => {
                        u.followed ? props.unFollow(u.id) : props.follow(u.id)
                    }}>
                        {u.followed ? 'UnFollow' : 'Follow'}
                    </button>
                </div>
            </div>
        </div>)
        }
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize} portionSize={portionSize}/>
    </div>
}

export default Users;