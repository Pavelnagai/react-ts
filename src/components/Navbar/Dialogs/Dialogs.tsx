import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    sendMessageCreate,
    updateMessageTextAC
} from "../../../redux/dialog-reducer";
import {ActionsTypes, DialogPropsType, MessagePropsType, StoreType} from "../../../redux/state";

export type DialogType = {
    dialog: Array<DialogPropsType>
    message: Array<MessagePropsType>
    store: any
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: DialogType) => {
    // let state = props.store.getState().dialogPage

    let dialogElements = props.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.message.map(m => <Message message={m.message}/>)
    let newMessageBody = props.store.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreate())
    }
    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateMessageTextAC(body))
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