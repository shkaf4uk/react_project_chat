import React from 'react';
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    setUserTotalCount,
    UnFollow,
    Follow
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
        console.log('props userContainer: ', this.props)
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unFollow={this.props.UnFollow}
                   portionSize={this.props.portionSize} follow={this.props.Follow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose(
    connect(mapStateToProps,
            {
                Follow,
                UnFollow,
                setCurrentPage,
                setUserTotalCount,
                getUsers: getUsers,
            }),
    // WithAuthRedirect,
)(UsersContainer)
