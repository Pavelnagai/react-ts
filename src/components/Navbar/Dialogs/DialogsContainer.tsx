import React from "react";
import {InitialStateDialogType, sendMessageCreate, updateMessageTextAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {Dispatch} from "redux";
import {WIthAuthRedirect} from "../../common/hoc/WIthAuthRedirect";

type MapStateType = {
    dialogPage: InitialStateDialogType,
    isAuth: any
}
type MapDispatchType = {
    updateMessageText: (body: string) => void,
    sendMessageCreate: () => void
}
export type DialogType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
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
const DialogsContainer = WIthAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
export default DialogsContainer