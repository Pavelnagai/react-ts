import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    store: any
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile
