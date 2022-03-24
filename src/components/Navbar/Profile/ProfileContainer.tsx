import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getStatus, profileUser, savePhoto, updateStatus} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/hoc/WithAuthRedirect";

class ProfileContainer extends React.PureComponent<any, any> {
    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} owner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                     profile={this.props.profile} status={this.props.status}
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
    connect(mapStateToProps, {profileUser, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
