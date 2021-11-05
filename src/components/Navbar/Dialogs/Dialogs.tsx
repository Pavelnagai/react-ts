import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogItemProps = {
    id: number
    name: string
}
const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name='Pavel' id={1}/>
                    <DialogItem name='Andrei' id={2}/>
                    <DialogItem name='Alina' id={3}/>
                    <DialogItem name='Anna' id={4}/>
                    <DialogItem name='Make' id={5}/>
                    <DialogItem name='David' id={6}/>
                </div>
                <div className={s.messages}>
                    <Message message="Hy"/>
                    <Message message="Hello dad"/>
                    <Message message="Year good"/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs