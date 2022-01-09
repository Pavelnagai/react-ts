import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC,
    setUsersAc,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowAC,
    UserPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assect/images/configPageLoader.gif'
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setToggleFetching(false)
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setToggleFetching(false)
                this.props.setUsers(responce.data.items)
            })
    }

    render() {
        return <>
            {this.props.userPage.isFetching
                ? <Preloader/>
                : null}
            <Users
                users={this.props.userPage.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
            />
        </>
    }
}

type MapStateType = {
    userPage: InitialStateUsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchType = {
    follow: (userID: string) => void,
    unFollow: (userID: string) => void,
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (pageNumber: number) => void
    setToggleFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        userPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setToggleFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default UserContainer