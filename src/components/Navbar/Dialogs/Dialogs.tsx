import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name:"Pavel"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Alina"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Make"},
        {id: 6, name: "David"}
    ]
    let messageData = [
        {id: 1, message: "Hy"},
        {id: 2, message: "Hello dad"},
        {id: 3, message: "Your good friends"},
        {id: 4, message: "Anna good girl"},
        {id: 5, message: "Meat year"},
        {id: 6, message: "David boy"}
    ]
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                    <Message message={messageData[2].message}/>
                    <Message message={messageData[3].message}/>
                    <Message message={messageData[4].message}/>
                    <Message message={messageData[5].message}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs