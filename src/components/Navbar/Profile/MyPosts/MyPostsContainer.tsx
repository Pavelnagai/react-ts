import React, {ChangeEvent} from 'react';
import {addPostAC, PostPropsType, updatePostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store-redux";
import {Dispatch} from "redux";

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
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPostAC: () => {
            dispatch(addPostAC())
        },
        updatePostTextAC: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = updatePostTextAC(e)
            dispatch(action)
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer