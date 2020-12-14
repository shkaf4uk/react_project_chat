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
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
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
    WithAuthRedirect,
)(UsersContainer)
