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
}
let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 1
}
type ActionType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetTotalCountType
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
                users: action.payload.users
            }
        }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currantPage
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalUserCount: action.totalCount
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
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currantPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currantPage
    } as const
}
type SetTotalCountType = ReturnType<typeof setUsersTotalCountAC>

export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    } as const
}
export default usersReducer