import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialog = [
        {id: 1, name: "Pavel"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Alina"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Make"},
        {id: 6, name: "David"}
    ]
    let message = [
        {id: 1, message: "Hy"},
        {id: 2, message: "Hello dad"},
        {id: 3, message: "Your good friends"},
        {id: 4, message: "Anna good girl"},
        {id: 5, message: "Meat year"},
        {id: 6, message: "David boy"}
    ]
    let dialogElements =
        dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement =
        message.map(m => <Message message={m.message}/>)
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
        </div>
    )
}
export default Dialogs