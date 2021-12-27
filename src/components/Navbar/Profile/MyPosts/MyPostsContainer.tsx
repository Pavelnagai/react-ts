import React, {ChangeEvent} from 'react';
import {addPostAC, updatePostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../../redux/state";

type MyPostPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = updatePostTextAC(e)
        props.store.dispatch(action)
    }
    return (
        <MyPosts addPostAC={addPost} updatePostTextAC={onChangeHandler} posts={state.profilePage.post}
                 messageForNewPost={state.profilePage.newPost}/>
    )
}
export default MyPostsContainer