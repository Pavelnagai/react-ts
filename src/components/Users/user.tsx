import React from 'react';
import {UsersPropsType} from "./Users-Container";
import styles from './user.module.css'
import axios from "axios";
import image from '../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'


const User = (props: UsersPropsType) => {
    const getUsers = () => {
        if (state.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    props.setUsers(responce.data.items)
                })
        }
    }
    let state = props.userPage

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {state.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : image} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unFollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{'u.fullName'}</div>
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

export default User;