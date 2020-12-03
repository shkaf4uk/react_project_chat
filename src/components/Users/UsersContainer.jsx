import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    toggleIsFetchingAC,
    unFollowAC
} from "../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching} />
            <Users onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow} />
                      </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (PageNumber) => {
            dispatch(setCurrentPageAC(PageNumber))
        },
        setTotalUserCount: (totalUsersCount) => {
            dispatch(setUserTotalCountAC(totalUsersCount))
        },
        toggleIsFetchingAC:(isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
