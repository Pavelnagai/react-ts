import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getStatus, profileUser, updateStatus} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose<ComponentType>(
    connect(mapStateToProps, {profileUser, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)
