import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPagePropsType} from "../../../redux/state";

export type DialogType = {
    store: DialogPagePropsType
    updateMessageText: (body:string)=> void
    sendMessageCreate: ()=> void
}


const Dialogs = (props: DialogType) => {
    let state = props.store

    let dialogElements =state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = state.message.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessageCreate()
    }
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateMessageText(body)
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
            <textarea value={newMessageBody} onChange={onChangeTextArea}/>
            <button className={s.buttonSend} onClick={onSendMessageClick}>send</button>
        </div>
    )
}
export default Dialogs