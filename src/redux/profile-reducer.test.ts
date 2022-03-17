import {v1} from "uuid";
import {addPostAC, deletePost, PostPropsType, profileReducer} from "./profile-reducer";

let state = {
    post: [
        {id: '1', message: "Post 1", likeCheck: 12},
        {id: v1(), message: "Post 2", likeCheck: 18},
        {id: v1(), message: "Post 3", likeCheck: 11},
        {id: v1(), message: "Post 4", likeCheck: 19},
    ] as Array<PostPropsType>,
    profile: null,
    status: ''
}

it('new post should be added', () => {
    let action = addPostAC('New post')

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(5)
})

it('Post not delete, incorrect userId', () => {
    let action = deletePost('23')

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(4)
})

it('Post should be delete', () => {
    let action = deletePost('1')

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(3)
})