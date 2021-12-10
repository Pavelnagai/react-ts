import React, {ChangeEvent} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostPropsType, updatePostTextAC} from "../../../../redux/state";

type MyPostPropsType = {
    post: Array<PostPropsType>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let addPost = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e))
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
