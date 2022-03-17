import React from 'react';
import {NavLink} from "react-router-dom";
import image from "../../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";
import styles from "../user.module.css";
import {UserPropsType} from "../../../redux/users-reducer";

type UserType = {
    users: UserPropsType
    followingInProgress: string[],
    follow: (userID: string) => void
    unFollow: (userID: string) => void

}
const User = ({users, followingInProgress, unFollow, follow}: UserType) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={`/profile/${users.id}`}>
                        <img src={users.photos.small !== null ? users.photos.small : image}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {users.followed
                            ? <button disabled={followingInProgress.some(id => id === users.id)}
                                      onClick={() => {
                                          unFollow(users.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === users.id)}
                                      onClick={() => {
                                          follow(users.id)
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
        </div>
    );
};

export default User;