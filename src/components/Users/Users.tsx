import React from 'react';
import styles from "./user.module.css";
import image from "../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import {UserPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
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
                <Pagination pageSize={pageSize} totalUserCount={totalUserCount} onPageChanged={onPageChanged}
                            currentPage={currentPage}/>
            </div>
        </div>
    );
};

export default Users;