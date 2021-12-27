import React, {ChangeEvent} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostPropsType} from "../../../../redux/state";

type MyPostPropsType = {
    addPostAC: () => void
    updatePostTextAC: (e: ChangeEvent<HTMLTextAreaElement>) => void
    posts: Array<PostPropsType>
    messageForNewPost: string
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let addPost = () => {
        props.addPostAC()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostTextAC(e)
    }
    return (
        <div className={classn.item}>
            <div className={classn.button}>
                <textarea value={props.messageForNewPost}
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
