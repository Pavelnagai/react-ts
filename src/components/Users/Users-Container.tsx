import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC,
    setUsersAc, setUsersTotalCountAC,
    unfollowAC,
    UserPropsType
} from "../../redux/users-reducer";

type MapStateType = {
    userPage: InitialStateUsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchType = {
    follow: (userID: string) => void,
    unFollow: (userID: string) => void,
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (pageNumber: number)=> void
    setTotalUsersCount: (pageNumber: number)=> void
}
export type UsersPropsType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        userPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,

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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UserContainer