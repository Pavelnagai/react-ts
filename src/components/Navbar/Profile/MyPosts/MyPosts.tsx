import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {AddPropsType, PostPropsType, updatePostText} from "../../../../redux/state";

type MyPostPropsType = {
    post: Array<PostPropsType>
    messageForNewPost: string
    addPost: () => void
    updatePostText: (newText: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
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
