import {v1} from "uuid";

export type StoreType = {
    _state: RootStateType,
    _rerenderEntireTree: () => void,
    addPost: () => void,
    updatePostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
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
}
export type SidebarPagePropsType = {}


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
            ]
        },
        sidebarPage: {},
    },
    addPost() {
        let newPost: PostPropsType = {
            id: v1(),
            message: this._state.profilePage.newPost,
            likeCheck: 0
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPost = ''
        this._rerenderEntireTree()
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    updatePostText(newText: string) {
        // this._state.profilePage.newPost = newText
        this._state.profilePage.newPost = newText
        this._rerenderEntireTree()
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}


export default store