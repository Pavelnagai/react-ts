import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css'

type DialogItemProps = {
    id: number
    name: string
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <img
                src="https://images.macrumors.com/t/gMpwGapfEGakqOCl4TFiAH3KcuQ=/1600x0/article-new/2021/09/apple-event-september-14.jpg"/>
            <NavLink className={s.user} to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem