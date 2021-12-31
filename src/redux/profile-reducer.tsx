import {v1} from "uuid";
import {ChangeEvent} from "react";


const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
export type PostPropsType = {
    id: string
    message: string
    likeCheck: number
}
export type InitialStateProfileType = typeof initialState
let initialState = {
    post: [
        {id: v1(), message: "Post 1", likeCheck: 12},
        {id: v1(), message: "Post 2", likeCheck: 18},
        {id: v1(), message: "Post 3", likeCheck: 11},
        {id: v1(), message: "Post 4", likeCheck: 19},
    ] as Array<PostPropsType>,
    newPost: ''
}
type ActionType = addPostType | updatePostTextType
export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: v1(),
                message: state.newPost,
                likeCheck: 0
            }
        {
            let stateCopy = {...state}
            stateCopy.post = [...state.post]
            stateCopy.post.push(newPost)
            stateCopy.newPost = ''
            return stateCopy
        }
        case UPDATE_POST_TEXT:
            let stateCopy ={...state}
            stateCopy.newPost = action.newText
            return stateCopy
        default:
            return state
    }
}
type addPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
};
type updatePostTextType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: e.currentTarget.value
    } as const
};