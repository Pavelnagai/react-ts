import React from 'react';
import {UserPropsType} from "../../redux/users-reducer";
import Paginator from "../common/Pagination/Paginator";
import User from './User/User';


type UsersPropsType = {
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserPropsType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setFollowingProgress: (isFetching: boolean, id: string) => void
    followingInProgress: string[]
}
const Users = ({pageSize, onPageChanged, currentPage, totalUserCount, ...props}: UsersPropsType) => {
    return (
        <div>

            {props.users.map(u => <User key={u.id} users={u} unFollow={props.unFollow} follow={props.follow}
                                        followingInProgress={props.followingInProgress}/>)}
            <div>
                <Paginator pageSize={pageSize} totalUserCount={totalUserCount} onPageChanged={onPageChanged}
                           currentPage={currentPage}/>
            </div>
        </div>
    );
};

export default Users;