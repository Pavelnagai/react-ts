import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {ProfilePagePropsType} from "../../../redux/state";


const Profile = (props: ProfilePagePropsType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts post={props.post}/>
    </div>
}
export default Profile
