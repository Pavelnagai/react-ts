import React, {ChangeEvent} from 'react';
import classn from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostPropsType} from "../../../../redux/state";

type MyPostPropsType = {
    post: Array<PostPropsType>
    messageForNewPost: string
    // addPost: () => void
    // updatePostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} likeCheck={p.likeCheck}/>)
    let addPost = () => {
        // props.addPost()
        props.dispatch({type: "ADD-POST"})

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updatePostText(e.currentTarget.value)
        props.dispatch({type: "UPDATE-POST-TEXT", newText: e.currentTarget.value})
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
