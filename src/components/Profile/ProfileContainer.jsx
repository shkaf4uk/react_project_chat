import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileUser(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getProfileUser}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)