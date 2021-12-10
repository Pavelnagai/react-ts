import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {ActionsTypes, ProfilePagePropsType} from "../../../redux/state";

export type ProfilePropsType = {
    post: ProfilePagePropsType
    // addPost: () => void
    messageForNewPost: string
    // updatePostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts post={props.post.post}
                 // addPost={props.addPost}
                 dispatch={props.dispatch}
                 messageForNewPost={props.messageForNewPost}
                 // updatePostText={props.updatePostText}
        />
    </div>
}
export default Profile
