import React from "react";
import {InitialStateDialogType, sendMessageCreate, updateMessageTextAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {Dispatch} from "redux";

type MapStateType = {
    dialogPage: InitialStateDialogType
}
type MapDispatchType = {
    updateMessageText: (body: string) => void,
    sendMessageCreate: () => void
}
export type DialogType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        updateMessageText: (body: string) => {
            dispatch(updateMessageTextAC(body))
        },
        sendMessageCreate: () => {
            dispatch(sendMessageCreate())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer