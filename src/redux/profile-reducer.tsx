import {v1} from "uuid";
import {PostPropsType, ProfilePagePropsType} from "./state";
import {ChangeEvent} from "react";


const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    post: [
        {id: v1(), message: "Post 1", likeCheck: 12},
        {id: v1(), message: "Post 2", likeCheck: 18},
        {id: v1(), message: "Post 3", likeCheck: 11},
        {id: v1(), message: "Post 4", likeCheck: 19},
    ],
    newPost: ''
}
export const profileReducer = (state: ProfilePagePropsType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: v1(),
                message: state.newPost,
                likeCheck: 0
            }
            state.post.push(newPost)
            state.newPost = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPost = action.newText
            return state
        default:
            return state
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