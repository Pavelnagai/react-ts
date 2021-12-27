import React from "react";
import {sendMessageCreate, updateMessageTextAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

export type DialogType = {
    store: any
}


const DialogsContainer = (props: DialogType) => {
    let state = props.store.getState().dialogPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreate())
    }
    const onChangeTextArea = (body:string) => {
        props.store.dispatch(updateMessageTextAC(body))
    }
    return (
        <Dialogs store={state} updateMessageText={onChangeTextArea}  sendMessageCreate={onSendMessageClick}
        />
    )
}
export default DialogsContainer