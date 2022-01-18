import React from 'react';
import styles from "./user.module.css";
import image from "../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import {UserPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserPropsType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
}
const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((el, i) => {
                    return <span
                        key={i}
                        className={props.currentPage === el ? styles.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(el)
                        }}> {el} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : image} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2a3c113a-9f81-44c2-8055-fcb19926514f',
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2a3c113a-9f81-44c2-8055-fcb19926514f',
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    })

                            }}>follow</button>}
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
        </div>
    );
};

export default Users;