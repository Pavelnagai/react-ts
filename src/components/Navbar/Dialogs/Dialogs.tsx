import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


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