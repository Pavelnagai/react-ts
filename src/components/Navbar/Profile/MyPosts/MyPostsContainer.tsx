import React from 'react';
import {addPostAC, PostPropsType} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store-redux";

type MapStateType = {
    post: Array<PostPropsType>,
}

type MapDispatchType = {
    addPostAC: (newPost: any) => void,
}

export type PostType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        post: state.profilePage.post,
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPostAC})(MyPosts)
export default MyPostsContainer