import React from 'react';
import styles from "./user.module.css";
import image from "../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import {UserPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


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
const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : image} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unFollow(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)}
            <div>
                {/*<DataGrid*/}
                {/*    pageSize={pageSize}*/}
                {/*    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}*/}
                {/*    rowsPerPageOptions={[5, 10, 20]}*/}
                {/*    pagination*/}
                {/*    {...data}*/}
                {/*/>*/}
                {pages.map((el, i) => {
                    return <span
                        key={i}
                        className={props.currentPage === el ? styles.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(el)
                        }}> {el} </span>
                })}
            </div>
        </div>
    );
};

export default Users;