import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = ({isAuth, login}: HeaderPropsType) => {
    return <header className={s.header}>
        <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyCtPSy5vZ6NNKe6nmW5aEAWDfv2R3bV72g&usqp=CAU'}/>
        <div className={s.loginBlock}> {isAuth
            ? login
            : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}
export default Header
