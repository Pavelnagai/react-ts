import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk'

export type AppStateType = ReturnType<typeof rootReducer>
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

// @ts-ignore
window.store = store
