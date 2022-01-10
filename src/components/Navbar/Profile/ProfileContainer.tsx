import React from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateProfileType, setUsersProfile} from "../../../redux/profile-reducer";
import profile from "./Profile";
import {AppStateType} from "../../../redux/store-redux";

// export type ProfilePropsType = {}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                this.props.setUsersProfile(responce.data)
            })
    }

    render() {
        return (
            <Profile profile{...this.props}/>
        )
    }
}
export type ProfileContainerPropsType = MapStateType & MapDispatchType
type MapStateType = {
    profile: any
}
type MapDispatchType = {
    setUsersProfile: (profile: any) => void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps, {setUsersProfile})
(ProfileContainer)
