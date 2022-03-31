import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {initializedSuccess} from "./app.reducer";

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

export const getAuthUserData = () => async (dispatch: any) => {
    try {
        dispatch(setToggleFetching(true))
        const res = await AuthAPI.me()
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(initializedSuccess(true))
            dispatch(setAuthUserData(id, email, login, true))
            dispatch(setToggleFetching(false))
        } else {
            dispatch(initializedSuccess(true))
        }
    } catch (e) {
        console.log('1')
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    try {
        dispatch(setToggleFetching(true))
        const res = await AuthAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(setToggleFetching(false))
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('Email', {_error: message}))
        }
    } catch (e) {
        console.log('2')

    }
}

export const logout = () => async (dispatch: any) => {
    try {
        dispatch(setToggleFetching(true))
        const res = await AuthAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (e) {
        console.log('3')

    } finally {
        dispatch(setToggleFetching(false))
    }

}


