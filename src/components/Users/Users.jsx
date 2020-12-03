import React from 'react';
import avatar from './../../images/photo_2020-11-05_10-43-38.jpg';
import style from './users.module.css';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={style.page}>
            <button
                onClick={(e) => {
                    let pageNumber = props.currentPage;
                    pageNumber === 1 ? pageNumber = 1 : pageNumber--;
                    return props.onPageChanged(pageNumber);
                }}> Back
            </button>
            <button
                onClick={(e) => {
                    let pageNumber = props.currentPage;
                    pageNumber++;
                    return props.onPageChanged(pageNumber);
                }}> Next
            </button>
            {pages.map((p, index) => <span key={index} className={props.currentPage === p ? style.seceltedPage : ''}
                                           onClick={(e) => {
                                               props.onPageChanged(p)
                                           }}>{p}</span>)}
        </div>
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