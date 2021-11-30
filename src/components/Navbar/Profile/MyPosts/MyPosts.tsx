import React, {ChangeEvent, useState} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {AddPropsType, PostPropsType} from "../../../../redux/state";

type MyPostPropsType = {
    post: Array<PostPropsType>
    // newPost: AddPropsType
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={classn.item}>
            <div className={classn.button}>
                <textarea ref={newPostElement}></textarea>
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
