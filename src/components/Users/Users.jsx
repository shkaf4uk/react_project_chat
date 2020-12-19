import React from 'react';
import avatar from './../../images/unnamed.png';
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount} pageSize={pageSize}  />

        {props.users.map(u => <div className={style.userInfo}  key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : avatar} className={style.userPhoto}
                                 alt={''}/>
                        </NavLink>
                    </div>

                </span>
            <div className={style.userInfoName}>
                <div>Name: {u.name}</div>
                <div>Status: {u.status ? u.status : 'Without status'}</div>
                <div>
                    <button onClick={() => {
                        u.followed ? props.unFollow(u.id) : props.follow(u.id)
                    }}>
                        {u.followed ? 'UnFollow' : 'Follow'}
                    </button>
                </div>
            </div>
        </div>)
        }
    </div>
}

export default Users;