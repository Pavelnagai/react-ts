import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {AddPropsType, ProfilePagePropsType} from "../../../redux/state";

export type ProfilePropsType= {
    post: ProfilePagePropsType
    // newPost:AddPropsType
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts post={props.post.post} />
    </div>
}
export default Profile
