export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogPage: DialogPagePropsType
    sidebarPage: SidebarPagePropsType
}

export type DialogPropsType = {
    id: number
    name: string
}
export type PostPropsType = {
    id: number
    message: string
    likeCheck: number
}
export type MessagePropsType = {
    id: number
    message: string
}

export type ProfilePagePropsType = {
    post: Array<PostPropsType>,
}
export type DialogPagePropsType = {
    dialog: Array<DialogPropsType>
    message: Array<MessagePropsType>
}
export type SidebarPagePropsType = {}

let state: RootStateType = {
    profilePage: {
        post: [
            {id: 1, message: "Post 1", likeCheck: 12},
            {id: 2, message: "Post 2", likeCheck: 18},
            {id: 3, message: "Post 3", likeCheck: 11},
            {id: 4, message: "Post 4", likeCheck: 19},
        ],
    },
    dialogPage: {
        dialog: [
            {id: 1, name: "Pavel"},
            {id: 2, name: "Andrei"},
            {id: 3, name: "Alina"},
            {id: 4, name: "Anna"},
            {id: 5, name: "Make"},
            {id: 6, name: "David"}
        ],
        message: [
            {id: 1, message: "Hy"},
            {id: 2, message: "Hello dad"},
            {id: 3, message: "Your good friends"},
            {id: 4, message: "Anna good girl"},
            {id: 5, message: "Meat year"},
            {id: 6, message: "David boy"}
        ]
    },
    sidebarPage: {}
}

// export let addPost = (postMessage: string) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likeCheck: 0
//     }
//    state.profilePage.post.push(newPost)
// }

export default state