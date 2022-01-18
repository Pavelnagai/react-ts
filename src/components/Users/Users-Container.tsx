import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {
    follow,
    InitialStateUsersType,
    setCurrentPage, setFollowingProgress,
    setToggleFetching,
    setUsers,
    setUsersTotalCount,
    unFollow,
    UserPropsType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from "../../api/api";


class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.setToggleFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false)
                this.props.setUsers(data.items)
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
                setFollowingProgress ={this.props.setFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
    followingInProgress: string[]
}
type MapDispatchType = {
    follow: (userID: string) => void,
    unFollow: (userID: string) => void,
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (pageNumber: number) => void
    setToggleFetching: (isFetching: boolean) => void
    setFollowingProgress: (isFetching: boolean, id: string) => void

}
export type UsersPropsType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        userPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }

}

const UserContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleFetching,
    setFollowingProgress
})(UsersContainer)
export default UserContainer