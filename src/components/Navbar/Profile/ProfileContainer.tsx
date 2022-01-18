import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import {setUsersProfile} from "../../../redux/profile-reducer";
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
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
        })
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
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

export default connect(mapStateToProps, {
    setUsersProfile
})(WithUrlDataContainerComponent);


//----------------------------------------------------------
// import React from 'react';
// import Profile from "./Profile";
// import axios from "axios";
// import {connect} from "react-redux";
// import {setUsersProfile} from "../../../redux/profile-reducer";
// import {AppStateType} from "../../../redux/store-redux";
// import {useParams} from "react-router-dom";
//
// const withRouter = (WrappedComponent: any) => (props:any) => {
//     const params = useParams();
//     // etc... other react-router-dom v6 hooks
//     return (
//         <WrappedComponent
//             {...props}
//             params={params}
//             // etc...
//         />
//     );
// };
// function Topic() {
//     console.log(Topic)
//     let { topicId } = useParams();
//     return <h3>Requested topic ID: {topicId}</h3>;
// }
//
//
// class ProfileContainer extends React.Component<any, any> {
//     componentDidMount() {
//         let userId = this.props.params.userId;
//         if (!userId){
//             userId=2;
//         }
//         console.log(userId)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//             .then(responce => {
//                 this.props.setUsersProfile(responce.data)
//             })
//     }
//
//
//     render() {
//         debugger
//         return (
//             <Profile profile{...this.props}/>
//         )
//     }
// }
//
// export type ProfileContainerPropsType = MapStateType & MapDispatchType
// type contactsProfile = {
//     "facebook": string,
//     "website": null,
//     "vk": string,
//     "twitter": string,
//     "instagram": string,
//     "youtube": null,
//     "github": string,
//     "mainLink": null
// }
// type photosProfile = {
//     "small": string,
//     "large": string
// }
//
//
// type MapStateType = {
//     profile: {
//         "aboutMe": string,
//         "contacts": contactsProfile
//         "lookingForAJob": true,
//         "lookingForAJobDescription": string,
//         "fullName": string,
//         "userId": number,
//         "photos": photosProfile
//     }
// }
// type MapDispatchType = {
//     setUsersProfile: (profile: any) => void
// }
// let mapStateToProps = (state: AppStateType) => {
//     return {
//         profile: state.profilePage.profile
//     }
// }
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default connect(mapStateToProps, {setUsersProfile})
// (WithUrlDataContainerComponent)
