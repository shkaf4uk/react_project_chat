import React from 'react';
import avatar from './../../images/photo_2020-11-05_10-43-38.jpg';
import style from './users.module.css';
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={style.page}>
                <button
                    onClick={(e)=>{
                        console.log(this.props.currentPage);
                        let pageNumber = this.props.currentPage;
                        pageNumber === 1 ? pageNumber=1 : pageNumber--;
                        return this.onPageChanged(pageNumber);
                    }}> Back
                </button>
                <button
                    onClick={(e)=>{
                    console.log(this.props.currentPage);
                    let pageNumber = this.props.currentPage;
                    pageNumber++;
                    return this.onPageChanged(pageNumber);
                }}> Next
                </button>
                {pages.map((p,index) => <span key={index} className={this.props.currentPage === p ? style.seceltedPage : ''}
                                      onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={avatar} alt={avatar} className={style.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => {
                            u.followed ? this.props.unFollow(u.id) : this.props.follow(u.id)
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
}

export default Users;