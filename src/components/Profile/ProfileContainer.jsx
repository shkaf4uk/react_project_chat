import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getUserStatus, updateStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileUser(userId);
        this.props.getUserStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getProfileUser, getUserStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)