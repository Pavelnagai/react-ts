import {v1} from "uuid";
import {ChangeEvent} from "react";

export type StoreType = {
    _state: RootStateType,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogPage: DialogPagePropsType
    sidebarPage: SidebarPagePropsType
}
export type AddPropsType = {
    newPost: (postMessage: string) => void
}
export type DialogPropsType = {
    id: string
    name: string
}
export type PostPropsType = {
    id: string
    message: string
    likeCheck: number
}
export type MessagePropsType = {
    id: string
    message: string
}
export type ProfilePagePropsType = {
    post: Array<PostPropsType>
    newPost: string

}
export type DialogPagePropsType = {
    dialog: Array<DialogPropsType>
    message: Array<MessagePropsType>
    newMessageBody: string
}
export type SidebarPagePropsType = {}
export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof sendMessageCreate> |
    ReturnType<typeof updateMessageTextAC>


const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: v1(), message: "Post 1", likeCheck: 12},
                {id: v1(), message: "Post 2", likeCheck: 18},
                {id: v1(), message: "Post 3", likeCheck: 11},
                {id: v1(), message: "Post 4", likeCheck: 19},
            ],
            newPost: ''
        },
        dialogPage: {
            dialog: [
                {id: v1(), name: "Pavel"},
                {id: v1(), name: "Andrei"},
                {id: v1(), name: "Alina"},
                {id: v1(), name: "Anna"},
                {id: v1(), name: "Make"},
                {id: v1(), name: "David"}
            ],
            message: [
                {id: v1(), message: "Hy"},
                {id: v1(), message: "Hello dad"},
                {id: v1(), message: "Your good friends"},
                {id: v1(), message: "Anna good girl"},
                {id: v1(), message: "Meat year"},
                {id: v1(), message: "David boy"}
            ],
            newMessageBody: ''
        },
        sidebarPage: {},
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostPropsType = {
                id: v1(),
                message: this._state.profilePage.newPost,
                likeCheck: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPost = ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPost = action.newText
            this._rerenderEntireTree()
        } else if (action.type === NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body
            this._rerenderEntireTree()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.message.push({id: v1(), message: body},)
            this._rerenderEntireTree()
        }
    }
}


export default store

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
export const sendMessageCreate = () => {
    return {
        type: SEND_MESSAGE,
    } as const
};
export const updateMessageTextAC = (body: string) => {
    return {
        type: NEW_MESSAGE_BODY,
        body: body
    } as const
};