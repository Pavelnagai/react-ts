import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


export type InitialStateDialogType = typeof initialState

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

type ActionType = setAuthUser | ToggleFetchingType
export const authReducer = (state: InitialStateDialogType = initialState, action: ActionType): InitialStateDialogType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
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

export const setAuthUserData = (id: any, email: any, login: any, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id, email, login, isAuth
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

export const getAuthUserData = () => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        AuthAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                    dispatch(setToggleFetching(false))
                }
            });
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        AuthAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                    dispatch(setToggleFetching(false))
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('Email', {_error: message}))
                }
            });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        AuthAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                    dispatch(setToggleFetching(false))
                }

            });
    }
}

