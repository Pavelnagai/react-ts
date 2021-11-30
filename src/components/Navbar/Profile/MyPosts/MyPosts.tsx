import React, {ChangeEvent, useState} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {AddPropsType, PostPropsType, updatePostText} from "../../../../redux/state";

type MyPostPropsType = {
    post: Array<PostPropsType>
    addPost: () => void
    messageForNewPost: string
    updatePostText: (newText: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }
    const onChangeHandler = () => {
        if (newPostElement.current)
        {
            let text = newPostElement.current?.value
            props.updatePostText(text)

        }
        // props.updatePostText('')
    }
    return (
        <div className={classn.item}>
            <div className={classn.button}>
                <textarea ref={newPostElement} value={props.messageForNewPost} onChange={onChangeHandler}/>
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
