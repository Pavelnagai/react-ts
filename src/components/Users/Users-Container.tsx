import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC,
    setUsersAc,
    setUsersTotalCountAC,
    unfollowAC,
    UserPropsType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.userPage.users}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
        />
    }
}

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
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (pageNumber: number) => void
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

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default UserContainer