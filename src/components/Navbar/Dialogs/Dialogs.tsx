import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPagePropsType} from "../../../redux/state";

const Dialogs = (props: DialogPagePropsType) => {

    let dialogElements =
        props.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement =
        props.message.map(m => <Message message={m.message}/>)
    return (
        <div className={s.fullDialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
            <textarea></textarea>
            <button className={s.buttonSend}>send</button>
        </div>
    )
}
export default Dialogs