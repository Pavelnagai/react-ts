import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {
    follow,
    getUser,
    InitialStateUsersType,
    setCurrentPage,
    setFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WIthAuthRedirect} from "../common/hoc/WIthAuthRedirect";
import {compose} from 'redux';


class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUser(pageNumber, this.props.pageSize)

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
                setFollowingProgress={this.props.setFollowingProgress}
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
    setCurrentPage: (pageNumber: number) => void
    setFollowingProgress: (isFetching: boolean, id: string) => void
    getUser: any

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

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setFollowingProgress,
        getUser,
    }),
    WIthAuthRedirect
)(UsersContainer)