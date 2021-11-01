import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classn.item}>
            My Posts
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default MyPosts
