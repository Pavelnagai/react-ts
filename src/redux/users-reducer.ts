const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

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
}
let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true
}


type ActionType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetTotalCountType | ToggleFetchingType
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
        default:
            return state
    }
}
export type FollowType = ReturnType<typeof follow>
export type UnFollowType = ReturnType<typeof unFollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalCountType = ReturnType<typeof setUsersTotalCount>
export type ToggleFetchingType = ReturnType<typeof setToggleFetching>

export const follow = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const unFollow = (userID: string) => {
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

export default usersReducer