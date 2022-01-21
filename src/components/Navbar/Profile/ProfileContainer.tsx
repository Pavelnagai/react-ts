import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import {profileUser} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";

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
        this.props.profileUser(this.props.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {profileUser})(WithUrlDataContainerComponent);



