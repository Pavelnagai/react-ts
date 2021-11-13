import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../../../../redux/state";

const MyPosts = (props:ProfilePagePropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    return (
        <div className={classn.item}>
            <h3>My Posts</h3>
            {postElement}
        </div>
    )
}
export default MyPosts
