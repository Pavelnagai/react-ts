import React from 'react';
import {UsersPropsType} from "./Users-Container";
import styles from './user.module.css'
import {v1} from "uuid";


const User = (props: UsersPropsType) => {
    let state = props.userPage
    if (state.users.length === 0) {
        props.setUsers([
            {
                photoUrl: 'https://www.belta.by/images/storage/news/with_archive/2020/000029_1600931117_408017_big.jpg',
                id: v1(),
                followed: false,
                fullName: 'Andrei',
                status: 'I am boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                photoUrl: 'https://www.belta.by/images/storage/news/with_archive/2020/000029_1600931117_408017_big.jpg',
                id: v1(),
                followed: true,
                fullName: 'Paul',
                status: 'I am boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                photoUrl: 'https://www.belta.by/images/storage/news/with_archive/2020/000029_1600931117_408017_big.jpg',
                id: v1(),
                followed: false,
                fullName: 'Alina',
                status: 'I am boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ]);
    }
    return (
        <div>
            {state.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default User;