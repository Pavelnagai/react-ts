import {v1} from "uuid";
import {ChangeEvent} from "react";
import {profileAPI, UsersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"
const SET_STATUS = "SET_STATUS"

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
    profile: null,
    status: ''
}
type ActionType = addPostType | updatePostTextType | setUsersProfileType | setStatusType

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
        case SET_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}
export type addPostType = ReturnType<typeof addPostAC>
export type updatePostTextType = ReturnType<typeof updatePostTextAC>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
type setStatusType = ReturnType<typeof setStatus>
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

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const
}
export const profileUser = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then(res => {
                dispatch(setUsersProfile(res.data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setStatus(res.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(res => {
               if(res.data.resultCode === 0) {
                   dispatch(setStatus(status))
               }
            })
            .catch(rej => {
                console.log('warning updateStatus')
            })
    }
}