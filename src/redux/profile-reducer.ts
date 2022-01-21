import {v1} from "uuid";
import {ChangeEvent} from "react";
import {UsersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"

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
    newPost: '',
    profile: null
}
type ActionType = addPostType | updatePostTextType | setUsersProfileType

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: v1(),
                message: state.newPost,
                likeCheck: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPost: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPost: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export type addPostType = ReturnType<typeof addPostAC>
export type updatePostTextType = ReturnType<typeof updatePostTextAC>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>

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
export const setUsersProfile = (profile: any) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    } as const
}

export const profileUser = (userId: string) => {
    return (dispatch: any) => {
        UsersAPI.profileApi(userId)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}