import {v1} from "uuid";

export type AddPropsType = {
    newPost: (postMessage: string) => void
}
export type NewPostType = {
    id: string,
    message: string,
    likeCheck: number
}
export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogPage: DialogPagePropsType
    sidebarPage: SidebarPagePropsType
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

}
export type DialogPagePropsType = {
    dialog: Array<DialogPropsType>
    message: Array<MessagePropsType>
}
export type SidebarPagePropsType = {}

let state: RootStateType = {
    profilePage: {
        post: [
            {id: v1(), message: "Post 1", likeCheck: 12},
            {id: v1(), message: "Post 2", likeCheck: 18},
            {id: v1(), message: "Post 3", likeCheck: 11},
            {id: v1(), message: "Post 4", likeCheck: 19},
        ],
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
};
export let addPost = (postMessage: string) => {
    let newPost: NewPostType = {
        id: v1(),
        message: postMessage,
        likeCheck: 0
    }
    state.profilePage.post.push(newPost)
}

export default state