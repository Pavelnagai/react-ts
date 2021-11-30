import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {AddPropsType, ProfilePagePropsType, updatePostText} from "../../../redux/state";

export type ProfilePropsType = {
    post: ProfilePagePropsType
    // newPost:AddPropsType
    addPost: () => void
    messageForNewPost: string
    updatePostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts post={props.post.post} addPost={props.addPost} messageForNewPost={props.messageForNewPost} updatePostText={props.updatePostText}
        />
    </div>
}
export default Profile
