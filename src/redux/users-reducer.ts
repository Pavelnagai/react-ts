import {FollowingAPI, UsersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

type UserLocation = {
    city: string,
    country: string
}
export type UserPropsType = {
    photos: any
    id: string
    followed: boolean
    name: string
    status: string
    location: UserLocation
}
export type InitialStateUsersType = {
    users: UserPropsType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}


type ActionType =
    FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | ToggleFetchingType
    | FollowingProgressType
export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currantPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.id]
                    : state.followingInProgress.filter(id => id !== action.payload.id)
            }

        default:
            return state
    }
}
export type FollowType = ReturnType<typeof followSuccess>
export type UnFollowType = ReturnType<typeof unFollowSuccess>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalCountType = ReturnType<typeof setUsersTotalCount>
export type ToggleFetchingType = ReturnType<typeof setToggleFetching>
export type FollowingProgressType = ReturnType<typeof setFollowingProgress>
export const unFollowSuccess = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const followSuccess = (userID: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export const setUsers = (users: UserPropsType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (currantPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currantPage
    } as const
}
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const
}
export const setToggleFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const setFollowingProgress = (isFetching: boolean, id: string) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            id,
        }
    } as const
}

export const getUser = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        UsersAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setToggleFetching(false))
                dispatch(setUsers(res.data.items))
                dispatch(setUsersTotalCount(res.data.totalCount))
            })
    }
}
export const unFollow = (userId: string) => {
    return (dispatch: any) => {
        dispatch(setFollowingProgress(true, userId))
        FollowingAPI.UnfollowUsers(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(setFollowingProgress(false, userId))
            })
    }
}
export const follow = (userId: string) => {
    return (dispatch: any) => {
        dispatch(setFollowingProgress(true, userId))
        FollowingAPI.followUsers(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setFollowingProgress(false, userId))
            })
    }
}

export default usersReducer