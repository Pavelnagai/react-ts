import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/store-redux";


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
type contactsProfile = {
    "facebook": string,
    "website": null,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": null,
    "github": string,
    "mainLink": null
}
type photosProfile = {
    "small": string,
    "large": string
}


type MapStateType = {
    profile: {
        "aboutMe": string,
        "contacts": contactsProfile
        "lookingForAJob": true,
        "lookingForAJobDescription": string,
        "fullName": string,
        "userId": number,
        "photos": photosProfile
    }
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
