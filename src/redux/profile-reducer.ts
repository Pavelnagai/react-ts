import {v1} from "uuid";
import {ChangeEvent} from "react";


const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
export type PostPropsType = {
    id: string
    message: string
    likeCheck: number
}
// type contactsProfile = {
//     "facebook": string,
//     "website": null,
//     "vk": string,
//     "twitter": string,
//     "instagram": string,
//     "youtube": null,
//     "github": string,
//     "mainLink": null
// }
// type photosProfile = {
//     "small": string,
//     "large": string
// }
//
// export type profilePropsType = {
//     "aboutMe": string,
//     "contacts": contactsProfile
//     "lookingForAJob": true,
//     "lookingForAJobDescription": string,
//     "fullName": string,
//     "userId": 2,
//     "photos": photosProfile
// }
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
        case "SET_USERS_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
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
type setUsersProfileType = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: any) => {
    return {
        type: 'SET_USERS_PROFILE',
        profile
    } as const
}