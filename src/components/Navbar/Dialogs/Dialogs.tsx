import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to='/dialogs/1'> Pavel </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Andrei </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> David </NavLink></div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'> Anna </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'> Alina </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'> Sergei </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hy</div>
                <div className={s.message}>Hello dad</div>
                <div className={s.message}>Year good</div>
            </div>
        </div>
    )
}
export default Dialogs