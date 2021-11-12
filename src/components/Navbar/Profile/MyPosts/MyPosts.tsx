import React from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let post = [
        {id: 1, message: "Post 1", likeCheck: 12},
        {id: 2, message: "Post 2", likeCheck: 18},
        {id: 3, message: "Post 3", likeCheck: 11},
        {id: 4, message: "Post 4", likeCheck: 19},
    ]
    let postElement = post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    return (
        <div className={classn.item}>
            <h3>My Posts</h3>
            {postElement}
        </div>
    )
}
export default MyPosts
