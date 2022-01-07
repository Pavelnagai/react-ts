import React from 'react';
import {UsersPropsType} from "./Users-Container";
import styles from './user.module.css'
import axios from "axios";
import image from '../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'

class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props);
        {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    this.props.setUsers(responce.data.items)
                })
        }
    }

    render() {
        return (
            <div>
                {this.props.userPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : image} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.follow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                this.props.unFollow(u.id)
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
    }
}

export default Users;