import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css'

type DialogItemProps = {
    id: string
    name: string
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink className={s.user} to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem