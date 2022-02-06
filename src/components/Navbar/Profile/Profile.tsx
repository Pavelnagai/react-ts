import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: any
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile
