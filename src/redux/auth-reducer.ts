import {AuthAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


export type InitialStateDialogType = typeof initialState

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false

};

type ActionType = setAuthUser | ToggleFetchingType
export const authReducer = (state: InitialStateDialogType = initialState, action: ActionType): InitialStateDialogType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
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
export type setAuthUser = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: any, email: any, login: any) => {
    return {
        type: SET_USER_DATA,
        data: {
            id, email, login
        }
    } as const
};

export type ToggleFetchingType = ReturnType<typeof setToggleFetching>

export const setToggleFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const loginUser = () => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        AuthAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                    dispatch(setToggleFetching(false))
                }
            });
    }
}