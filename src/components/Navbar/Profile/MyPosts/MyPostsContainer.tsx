import React, {ChangeEvent} from 'react';
import {addPostAC, PostPropsType, updatePostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store-redux";

type MapStateType = {
    post: Array<PostPropsType>,
    newPost: string
}
type MapDispatchType = {
    addPostAC: () => void,
    updatePostTextAC: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export type PostType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        post: state.profilePage.post,
        newPost: state.profilePage.newPost
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPostAC, updatePostTextAC})(MyPosts)
export default MyPostsContainer