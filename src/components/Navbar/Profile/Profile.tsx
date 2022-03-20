import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: any
    savePhoto: any
    owner: boolean
}

const Profile = React.memo((props: ProfilePropsType)=> {
    return <div className={s.content}>
        <ProfileInfo owner={props.owner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
})
export default Profile
