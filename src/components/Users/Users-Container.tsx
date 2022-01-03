import React from 'react';
import {connect} from "react-redux";
import User from "./user";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, UserPropsType, setUsersAc, unfollowAC} from "../../redux/users-reducer";

type MapStateType = {
    userPage: InitialStateUsersType
}
type MapDispatchType = {
    follow: (userID: string) => void,
    unFollow: (userID: string) => void,
    setUsers: (users: UserPropsType[]) => void
}
export type UsersPropsType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        userPage: state.usersPage
    }

}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserPropsType[]) => {
            dispatch(setUsersAc(users))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)
export default UserContainer