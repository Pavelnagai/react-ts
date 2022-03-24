import {v1} from "uuid";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

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
    profile: null,
    status: ''
}
type ActionType = AddPostType | SetUsersProfileType | SetStatusType | DeletePostType | SavePhotoSuccessType

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: v1(),
                message: action.payload.newPost,
                likeCheck: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
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
        case "DELETE_POST":
            return {
                ...state,
                post: state.post.filter(el => el.id !== action.payload.userId)
            }
        case "SAVE_PHOTO_SUCCESS":
            return {
                // @ts-ignore
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}
export type AddPostType = ReturnType<typeof addPostAC>
export type SetUsersProfileType = ReturnType<typeof setUsersProfile>
export type SetStatusType = ReturnType<typeof setStatus>
export type DeletePostType = ReturnType<typeof deletePost>
export type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
export const addPostAC = (newPost: any) => {
    return {
        type: ADD_POST,
        payload: {
            newPost
        }
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

export const deletePost = (userId: string) => {
    return {
        type: DELETE_POST,
        payload: {
            userId
        }
    } as const
}

export const savePhotoSuccess = (photos: any) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
}
export const profileUser = (userId: string) => async (dispatch: any) => {
    try {
        if (userId) {
            const res = await profileAPI.getProfile(userId)
            dispatch(setUsersProfile(res.data))
        }
    } catch (e) {

    }
}
export const getStatus = (userId: string) => async (dispatch: any) => {
    try {
        if (userId) {
            const res = await profileAPI.getStatus(userId)
            dispatch(setStatus(res.data))
        }
    } catch (e) {

    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        try {
            const res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        } catch (rej) {
            console.log('warning updateStatus')
        }
    }
}
export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        try {
            const res = await profileAPI.savePhoto(file)
            if (res.data.resultCode === 0) {
                dispatch(savePhotoSuccess(res.data.data.photos))
            }
        } catch (rej) {
            console.log('warning updateStatus')
        }
    }
}