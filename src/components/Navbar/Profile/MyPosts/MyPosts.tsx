import React, {ChangeEvent} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "./MyPostsContainer";

const MyPosts = (props: PostType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let addPost = () => {
        props.addPostAC()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostTextAC(e)
    }
    return (
        <div className={classn.item}>
            <div className={classn.button}>
                <textarea value={props.newPost}
                          onChange={onChangeHandler}/>
                <button onClick={addPost}>Save</button>
            </div>
            <div>
                <h3>My Posts</h3>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
