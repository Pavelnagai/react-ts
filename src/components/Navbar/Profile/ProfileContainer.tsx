import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import {profileUser} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";
import {WIthAuthRedirect} from "../../common/hoc/WIthAuthRedirect";
import {compose} from "redux";

const withRouter = (WrappedComponent: any) => (props: any) => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.profileUser(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
});

export default compose<ComponentType>(
    connect(mapStateToProps, {profileUser}),
    withRouter,
    WIthAuthRedirect
)(ProfileContainer)

