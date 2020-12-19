import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setUserTotalCount,
    unFollow
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserSuperSelector
} from "../../redux/users_selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(
    connect(mapStateToProps,
            {
                follow,
                unFollow,
                setCurrentPage,
                setUserTotalCount,
                getUsers: getUsers,
            }),
    // WithAuthRedirect,
)(UsersContainer)
