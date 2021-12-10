import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {ActionsTypes, ProfilePagePropsType} from "../../../redux/state";

export type ProfilePropsType = {
    post: ProfilePagePropsType
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts post={props.post.post}
                 dispatch={props.dispatch}
                 messageForNewPost={props.messageForNewPost}
        />
    </div>
}
export default Profile
