import {v1} from "uuid";
import {PostPropsType, ProfilePagePropsType} from "./state";
import {ChangeEvent} from "react";


const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"


export const profileReducer = (state:ProfilePagePropsType, action:any) => {
    if (action.type === ADD_POST) {
        let newPost: PostPropsType = {
            id: v1(),
            message: state.newPost,
            likeCheck: 0
        }
        state.post.push(newPost)
        state.newPost = ''
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPost = action.newText
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
};
export const updatePostTextAC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: e.currentTarget.value
    } as const
};