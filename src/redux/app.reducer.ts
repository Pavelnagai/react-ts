import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


export type InitialStateApp = typeof initialState

let initialState = {
    initialized: false
};

type ActionType = setInitialized
export const appReducer = (state: InitialStateApp = initialState, action: ActionType): InitialStateApp => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: action.payload.initialized
            }
        default:
            return state
    }
}
export type setInitialized = ReturnType<typeof initializedSuccess>

export const initializedSuccess = (initialized: boolean) => ({type: INITIALIZED_SUCCESS, payload: {initialized}})


export const initializedApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData())
}


