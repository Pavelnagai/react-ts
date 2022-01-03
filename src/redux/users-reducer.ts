import {v1} from "uuid";

type UserLocation = {
    city: string,
    country: string
}
export type UserPropsType = {
    photoUrl: string
    id: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocation
}
export type InitialStateUsersType = {
    users: UserPropsType[]
}
let initialState: InitialStateUsersType = {
    users: [],
}
type ActionType = FollowType | UnFollowType | SetUsersType
export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state
    }
}
type FollowType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
type UnFollowType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}
type SetUsersType = ReturnType<typeof setUsersAc>
export const setUsersAc = (users: UserPropsType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}
export default usersReducer