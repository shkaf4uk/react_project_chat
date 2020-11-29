import React from 'react';
import avatar from './../../images/photo_2020-11-05_10-43-38.jpg';
import style from './users.module.css';
import * as axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={avatar} alt={avatar} className={style.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => {
                            u.followed ? props.unFollow(u.id) : props.follow(u.id)
                        }}>
                            {u.followed ? 'UnFollow' : 'Follow'}
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;