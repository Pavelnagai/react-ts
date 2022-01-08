import React from 'react';
import {UsersPropsType} from "./Users-Container";
import styles from './user.module.css'
import axios from "axios";
import image from '../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'

class Users extends React.Component<UsersPropsType, any> {
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
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(el => {
                        return <span className={this.props.currentPage === el ? styles.selectedPage : ''}
                                     onClick={() => {this.onPageChanged(el)}}> {el} </span>
                    })}
                </div>
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
    }
}

export default Users;