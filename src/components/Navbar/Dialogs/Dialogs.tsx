import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType} from "./DialogsContainer";
import {AddDialogForm, DialogDataFormType} from "./DialogForm";

const Dialogs = (props: DialogType) => {
    let state = props.dialogPage

    let dialogElements = state.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.message.map(m => <Message key={m.id} message={m.message}/>)

    const addMessage = (value: DialogDataFormType) => {
        props.sendMessageCreate(value.newMessageBody)
    }

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
            <div className={s.dialogTextArea}>
                <AddDialogForm onSubmit={addMessage}/>
            </div>

        </div>
    )
}
export default Dialogs


